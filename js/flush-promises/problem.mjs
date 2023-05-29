let msg;

function routerPush(resolve) {
  setTimeout(() => {
    msg = 1;
  }, 3000);
  resolve("vueRoute done");
}

const vueRoutePromise = new Promise(routerPush);
await vueRoutePromise;

console.log(`msg: ${msg}`);
