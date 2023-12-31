import { defineStore } from "pinia";

export const useTestStore = defineStore("testStore", {
  state: () => {
    const count = 0;
    const countReactive = { key: 0 };
    return { count, countReactive };
  },
});
