import { ref, computed, toRefs } from 'vue';
import { defineStore } from 'pinia';
import { useSessionStorage } from '@vueuse/core';

/**
 * Doing it this way, I noticed the store on first render has each field set
 * to the Ref object. So see bunch of weird fields like _v.
 *
 * However after clicking increment(), the fields are then set to normal values
 * of 0 and Dean
 */
export const useCounterStoreRef = defineStore('counter', () => {
  // const count = ref(0);
  // const name = ref('Dean');

  // useSessionStorage('my-key-ref', {
  //   count,
  //   name,
  // });

  // Just using this and returning state.value.count.value is also not working
  // But returning state: state.value does work and actually seems to not need the
  // storeToRefs. However still including it doesn't seem to hurt anything
  const state = useSessionStorage('my-key-ref', {
    count: 0,
    name: 'Dean',
  });

  // Doing this was giving null issues in the browser
  // const state = useSessionStorage('my-key-ref', {
  //   count: ref(0),
  //   name: ref('Dean'),
  // });

  // Having inconsistent results with this one. Sometimes it works, but most times
  // count is undefined at first

  // let { count } = toRefs(
  //   useSessionStorage('my-key-ref', {
  //     count: 0,
  //     name: 'Dean',
  //   }).value
  // );

  const doubleCount = computed(() => state.value.count * 2);

  function increment() {
    state.value.count++;
  }

  // returning count: state.value.count from commented out code above
  // did not seem to work (count undefined). Look like it's the storeToRefs
  // that causes that in the vue file

  return { state: state.value, doubleCount, increment };
});
