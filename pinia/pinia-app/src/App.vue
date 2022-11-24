<script setup lang="ts">
import { useCounterStoreRef } from './store/counter';
import { storeToRefs } from 'pinia';

const storeRef = useCounterStoreRef();

const { count, customerInfo, doubleCount } = storeToRefs(storeRef);
const { increment } = storeRef;

const {
  count: nonToRefCount,
  customerInfo: nonToRefCustInfo,
  doubleCount: nonToRefDoubleCount,
} = storeRef;

function handleClick() {
  count.value += 3;
  customerInfo.value.job.title = 'adl';
}
</script>

<template>
  <div>
    <button @click="increment">Increment</button>
    <button @click="handleClick">Manually Increment</button>
    <h2>count with storeToRefs: {{ count }}</h2>
    <h2>doubleCount with storeToRefs: {{ doubleCount }}</h2>
    <h2>Job title with storeToRefs: {{ customerInfo.job.title }}</h2>
    <br />
    Does not work if we don't use storeToRefs
    <h2>count without storeToRefs: {{ nonToRefCount }}</h2>
    <h2>doubleCount without storeToRefs: {{ nonToRefDoubleCount }}</h2>
    <h2>Job title without storeToRefs: {{ nonToRefCustInfo.job.title }}</h2>
  </div>
</template>
