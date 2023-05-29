let msg;
var resolves = [];
var taskQueue = {};

function flush() {
  while (Object.keys(taskQueue).length === 0 && resolves.length > 0) {
    resolves.pop()();
  }
}

function flushPromises(resolve) {
  resolves.push(resolve);
  // resolve('resolve right away')
}

function routerPush(resolve) {
  taskQueue['1'] = setTimeout(() => {
    msg = 1;
    delete taskQueue['1'];
    setTimeout(flush);
  }, 3000);
  resolve('vueRoute done');
}

const vueRoutePromise = new Promise(routerPush);
await vueRoutePromise;

const flushPromise = new Promise(flushPromises);
await flushPromise;

console.log(`msg: ${msg}`);

// let msg;
// var resolves = [];
// var taskQueue = {};

// function flush() {
//   while (Object.keys(taskQueue).length === 0 && resolves.length > 0) {
//     resolves.pop()();
//   }
// }

// function flushPromises(resolve) {
//   resolves.push(resolve);
//   // resolve('resolve right away')
// }

// function routerPush(resolve) {
//   taskQueue['1'] = setTimeout(() => {
//     msg = 1;
//     delete taskQueue['1'];
//     setTimeout(flush);
//   }, 3000);
//   resolve('vueRoute done');
// }

// const vueRoutePromise = new Promise(routerPush).then(() => {
//   const flushPromise = new Promise(flushPromises).then(() => {
//     console.log(`msg: ${msg}`);
//   });
// });
