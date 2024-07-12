// stores/counter.js
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
    state: () => {
        return { product: 0 }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            this.product++
        },
    },
})
