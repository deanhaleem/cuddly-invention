import {
  CloudWatchLogsClient,
  StartQueryCommand,
  GetQueryResultsCommand,
} from '@aws-sdk/client-cloudwatch-logs';
import { addProxyToClient } from 'aws-sdk-v3-proxy';

function getChunkedQueries(chunk) {
  return `
      filter (<filter string>)
        | filter (<field> = ${chunk.join('OR <field> = ')})
        | dedup <field>
    `;
}

const startTime = new Date('04-10-2024-00:00').getTime();
const endTime = new Date('04-11-2024-00:00').getTime();

const client = addProxyToClient(
  new CloudWatchLogsClient({
    region: 'us-east-1',
  }),
  { httpsOnly: true }
);

async function startQuery(startTime, endTime, queryString, limit) {
  const input = {
    logGroupName: '',
    startTime,
    endTime,
    queryString,
    limit: limit || null,
  };

  const command = new StartQueryCommand(input);
  const response = await client.send(command);

  return response.queryId;
}

async function getQueryResults(queryId, numSleepSeconds) {
  const queryCommand = new GetQueryResultsCommand({
    queryId,
  });

  let queryResponse = await client.send(queryCommand);

  while (numSleepSeconds && queryResponse.status === 'Running') {
    console.log(`Query ${queryId} status: Running`);
    await new Promise((r) => setTimeout(r, numSleepSeconds * 1000));

    queryResponse = await client.send(queryCommand);
  }

  if (queryResponse.status !== 'Complete') {
    console.log(`Query ${queryId} status: ${queryResponse.status}`);
    return null;
  }

  console.log(
    `Query ${queryId} finished with status ${queryResponse.$metadata.httpStatusCode}`
  );

  console.log(`Records matched: ${queryResponse.statistics.recordsMatched}`);

  const logs = queryResponse.results.map((result) => JSON.parse(result));

  return logs;
}
