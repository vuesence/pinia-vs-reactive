# Performance benchmark for Pina vs. Vue 3 Ref/Reactive

Vue 3 stores can be implemented using either Pinia or Vue 3 native Reactivity API

### Benchmark: 1000000 write operations

| Test | Time |
| ------ | ------ |
| Ref time: | 36ms| 
| Pinia ref time: | 628ms | 
| Reactive time: | 501ms | 
| Pinia reactive time: | 809ms | 


[StackBlitz](https://stackblitz.com/edit/vitejs-vite-pq41uh?file=src%2FApp.vue)
