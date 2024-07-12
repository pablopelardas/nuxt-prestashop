// stores/counter.js
import { defineStore } from 'pinia'

export const useProductListStore = defineStore('productList', {
    state: () => {
        return { productList: 0 }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            this.productList++
        },
    },
})
