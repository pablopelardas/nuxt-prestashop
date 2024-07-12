// stores/counter.js
import { defineStore } from 'pinia'

export const useUserInterfaceStore  = defineStore('userInterface', {
    state: () => {
        return { userInterface: 0 }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            this.userInterface++
        },
    },
})
