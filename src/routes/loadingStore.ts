import { writable } from 'svelte/store';

export const Loading = writable(true);

console.log(Loading)