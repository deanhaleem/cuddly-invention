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
  const count = ref(0);
  const name = ref('Dean');

  useSessionStorage('my-key-ref', {
    count,
    name,
  });

  // Having inconsistent results with this one. Sometimes it works, but mosttime
  // count is undefined

  // let { count } = toRefs(
  //   useSessionStorage('my-key-ref', {
  //     count: 0,
  //     name: 'Dean',
  //   }).value
  // );

  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
