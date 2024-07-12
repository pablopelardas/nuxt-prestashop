import {defineStore} from 'pinia'
import type {PagesNamesEnum} from "~/types/pages";

export const usePageStore = defineStore('page', {
    state() {
        return {
            homepage: {
                title: 'Welcome to the homepage',
                content: 'This is the homepage content',
            },
        }
    },
    actions:{
        async init(pageName: PagesNamesEnum) {
            const {data} = await useFetch("/api/page", {
                method: "POST",
                body: JSON.stringify({pageName}),
            })
        },
    }
})
