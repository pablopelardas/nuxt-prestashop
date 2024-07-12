// stores/counter.js
import { defineStore } from 'pinia'

export const useCheckoutStore = defineStore('checkout', {
    state: () => {
        return { checkout: 0 }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            this.checkout++
        },
    },
})
