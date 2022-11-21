import { defineComponent, h as createElement } from 'vue-demi';

import './hello-world.scss';

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: 'Hi there',
    },
  },
  render() {
    return createElement(
      'div',
      {
        class: 'greetings',
      },
      [
        createElement('h1', { class: 'green' }, this.msg),
        createElement('h3', {}, [
          "You've successfully created a project with ",
          createElement(
            'a',
            {
              href: 'https://vitejs.dev/',
              target: '_blank',
              rel: 'noopener',
            },
            'Vite '
          ),
          '+ ',
          createElement(
            'a',
            {
              href: 'https://vuejs.org/',
              target: '_blank',
              rel: 'noopener',
            },
            'Vue 3'
          ),
          '.',
        ]),
      ]
    );
  },
});

// <template>
//   <div class="greetings">
//     <h1 class="green">{{ msg }}</h1>
//     <h3>
//       You’ve successfully created a project with
//       <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
//       <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
//     </h3>
//   </div>
// </template>

// <style scoped>
// h1 {
//   font-weight: 500;
//   font-size: 2.6rem;
//   top: -10px;
// }

// h3 {
//   font-size: 1.2rem;
// }

// .greetings h1,
// .greetings h3 {
//   text-align: center;
// }

// @media (min-width: 1024px) {
//   .greetings h1,
//   .greetings h3 {
//     text-align: left;
//   }
// }
// </style>
