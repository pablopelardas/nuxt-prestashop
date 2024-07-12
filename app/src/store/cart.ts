// stores/counter.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => {
        return { cart: 0 }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            this.cart++
        },
    },
})
