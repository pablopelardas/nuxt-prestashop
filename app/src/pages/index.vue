<template>
index
</template>

<script lang="ts" setup>
import {usePageStore} from "~/store";
import {PagesNamesEnum} from "~/types/pages";

const pageStore = usePageStore();
pageStore.init(PagesNamesEnum.hp);
</script>
