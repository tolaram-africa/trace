import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0);
    function increment() {
      count.value++;
    }

    return {
      count,
      increment,
    };
  },
  {
    persist: true,
  }
);

// import { useCounterStore } from '@/layouts/stores';
// import { storeToRefs } from 'pinia';
// const counterStore = useCounterStore();
// const { count } = storeToRefs(counterStore);
// const { increment } = counterStore;
