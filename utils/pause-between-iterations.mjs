const numSleepSeconds = 1;
const numAsyncCalls = 1;

const data = [];
for (let i = 0; i < data.length; i++) {
  // Means the chunk below already went through the end of the array
  if (i * numAsyncCalls > data.length) {
    break;
  }

  await Promise.all(
    data
      .slice(i * numAsyncCalls, i * numAsyncCalls + numAsyncCalls)
      .map((entry) => {
        // do something
      })
  );

  await new Promise((r) => setTimeout(r, numSleepSeconds * 1000));
}
