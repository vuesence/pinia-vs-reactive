<script setup>
import { reactive, ref } from "vue";
import { useTestStore } from "./useTestStore";

const testStore = useTestStore();

const refVar = ref(0);
const reactiveVar = reactive({ key: 0 });
const time = reactive({
  ref: 0,
  reactive: 0,
  piniaRef: 0,
  piniaReactive: 0,
});

let startTime = Date.now();
for (let i = 0; i <= 1000000; i++) {
  refVar.value = i;
}
time.ref = `Ref time: ${Date.now() - startTime}ms`;
console.log(time.ref);
console.log(refVar.value);

startTime = Date.now();
for (let i = 0; i <= 1000000; i++) {
  testStore.count = i;
}
time.piniaRef = `Pinia ref time: ${Date.now() - startTime}ms`;
console.log(time.piniaRef);
console.log(testStore.count);

// ------

startTime = Date.now();
for (let i = 0; i <= 1000000; i++) {
  reactiveVar.key = i;
}
time.reactive = `Reactive time: ${Date.now() - startTime}ms`;
console.log(time.reactive);
console.log(reactiveVar.key);

startTime = Date.now();
for (let i = 0; i <= 1000000; i++) {
  testStore.countReactive.key = i;
}

time.piniaReactive = `Pinia reactive time: ${Date.now() - startTime}ms`;
console.log(time.piniaReactive);
console.log(testStore.countReactive.key);
</script>

<template>
  <div>
    1000000 "reactive" write operations
  </div>
  <div>
    {{ time.ref }}
  </div>
  <div>
    {{ time.piniaRef }}
  </div>
  <div>
    {{ time.reactive }}
  </div>
  <div>
    {{ time.piniaReactive }}
  </div>
</template>

<style scoped>
</style>
