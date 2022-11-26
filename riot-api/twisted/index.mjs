import { LolApi, Constants } from 'twisted';

const api = new LolApi(process.env.RIOT_TOKEN);

const summonerResponse = await api.Summoner.getByName(
  'fifa4life',
  Constants.Regions.AMERICA_NORTH
);
const summonerData = summonerResponse.response;

const matchIdsResponse = await api.MatchV5.list(
  summonerData.puuid,
  Constants.RegionGroups.AMERICAS,
  { count: 1 }
);
const matchIdData = matchIdsResponse.response;

const matchDetailsResponse = await api.MatchV5.get(
  matchIdData[0],
  Constants.RegionGroups.AMERICAS
);
const matchDetailsData = matchDetailsResponse.response;

const participantDetailsMap = new Map();
matchDetailsData.metadata.participants.forEach((participantId) => {
  participantDetailsMap.set(
    participantId,
    matchDetailsData.info.participants.find(
      (participantDetails) => participantDetails.puuid === participantId
    )
  );
});

const matchTimelineResponse = await api.MatchV5.timeline(
  matchIdData[0],
  Constants.RegionGroups.AMERICAS
);
const matchTimelineData = matchTimelineResponse.response;

const participantIdToPuuidMap = new Map();
matchTimelineData.info.participants.forEach((participant) => {
  participantIdToPuuidMap.set(participant.participantId, participant.puuid);
});

const participantIdTimelineMap = new Map();
matchTimelineData.info.frames.forEach((frame) => {
  participantIdToPuuidMap.forEach((value, key) => {
    if (!participantIdTimelineMap.has(key)) {
      participantIdTimelineMap.set(key, {
        [frame.timestamp]: frame.participantFrames[key],
      });
    } else {
      const existingEntry = participantIdTimelineMap.get(key);
      participantIdTimelineMap.set(key, {
        ...existingEntry,
        [frame.timestamp]: frame.participantFrames[key],
      });
    }
  });
});

console.log(participantIdTimelineMap.get(1));
