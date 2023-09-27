import { defineStore } from 'pinia'

type TState = {
  counter: number
}
const initialState: TState = {
  counter: 0,
}

export const useMainStore = defineStore('main', {
  state: () => initialState,
  actions: {
    increment() {
      // `this` is the store instance
      this.counter++
    },
  },
  getters: {
    getCounter(): number {
      return this.counter
    },
    getCounter2: (state) => {
      console.log('getter state', state.counter)
      return state.counter
    },
  },
})
