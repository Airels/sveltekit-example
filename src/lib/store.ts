import { derived, readable, writable } from 'svelte/store';

export const countStore = writable(0);

export const timeStore = readable(new Date(), function start(set) {

  const interval = setInterval(function start() {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };

});

const start = new Date();

export const derivedStore = derived(
    timeStore,
    $time => Math.round(($time - start) / 1000)
);

function customStore() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    increment: () => update(n => n + 1),
    decrement: () => update(n => n - 1),
    reset: () => set(0)
  }
}

export const custom = customStore();
