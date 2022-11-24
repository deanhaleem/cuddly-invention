<script setup lang="ts">
import { useCounterStoreRef } from './store/counter';
import { storeToRefs } from 'pinia';

const storeRef = useCounterStoreRef();

const { state, doubleCount } = storeToRefs(storeRef);
const { increment } = storeRef;

const { state: nonToRefState, doubleCount: nonToRefDoubleCount } = storeRef;

function handleClick() {
  state.value.count += 3;
}
</script>

<template>
  <div>
    <button @click="increment">Increment</button>
    <button @click="handleClick">Manually Increment</button>
    <h2>count with storeToRefs: {{ state.count }}</h2>
    <h2>doubleCount with storeToRefs: {{ doubleCount }}</h2>
    <br />
    Does not work if we don't use storeToRefs
    <h2>count without storeToRefs: {{ nonToRefState.count }}</h2>
    <h2>doubleCount without storeToRefs: {{ nonToRefDoubleCount }}</h2>
  </div>
</template>
