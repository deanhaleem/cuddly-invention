import { h as createElement, defineComponent } from 'vue-demi';
import HelloWorld from './components/HelloWorld';
import TheWelcome from './components/TheWelcome';
// import TheWelcome from './components/TheWelcome.vue';

import './app.scss';

export default defineComponent({
  render() {
    return createElement('div', {}, [
      createElement('header', {}, [
        createElement('div', { class: 'wrapper' }, [
          createElement(HelloWorld, {
            msg: 'Hello World',
          }),
        ]),
      ]),
      createElement('main', {}, createElement(TheWelcome)),
    ]);
  },
});

// <template>
//   <header>
//     <img
//       alt="Vue logo"
//       class="logo"
//       src="./assets/logo.svg"
//       width="125"
//       height="125" />

//     <div class="wrapper">
//       <HelloWorld msg="You did it!" />
//     </div>
//   </header>

//   <main>
//     <TheWelcome />
//   </main>
// </template>

// <!-- <style scoped>
// header {
//   line-height: 1.5;
// }

// .logo {
//   display: block;
//   margin: 0 auto 2rem;
// }

// @media (min-width: 1024px) {
//   header {
//     display: flex;
//     place-items: center;
//     padding-right: calc(var(--section-gap) / 2);
//   }

//   .logo {
//     margin: 0 2rem 0 0;
//   }

//   header .wrapper {
//     display: flex;
//     place-items: flex-start;
//     flex-wrap: wrap;
//   }
// }
// </style> -->
