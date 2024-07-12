<template>
  <footer class="bg-neutral-900">
    <div class=" justify-end px-4 py-10 md:flex md:py-6 max-w-[1536px] mx-auto px-4 md:px-10">
      <div class="flex justify-center py-2 gap-x-4 md:self-start">
        <SfButton
            v-for="{ label, link, icon } in socialMedia"
            :key="label"
            tag="a"
            square
            variant="tertiary"
            class="text-white active:text-white hover:text-white hover:!bg-neutral-500 active:!bg-transparent"
            :href="link"
            :aria-label="`Go to ${label} page`"
        >
          <component :is="icon" />
        </SfButton>
      </div>
      <div class="flex items-center justify-center gap-6 py-2 my-4 md:ml-auto md:my-0">
        <SfLink
            v-for="{ label, link } in bottomLinks"
            :key="label"
            variant="secondary"
            class="text-white no-underline typography-text-sm active:text-white active:underline hover:text-white hover:underline"
            :href="link"
        >
          {{ label }}
        </SfLink>
      </div>
      <p
          class="flex items-center justify-center py-2 leading-5 text-center typography-text-sm text-white/50 font-body md:ml-6"
      >
        @2024 WebBoost
      </p>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import {
  SfIconContactSupport,
  SfIconFacebook,
  SfIconHelp,
  SfIconInstagram,
  SfIconCall,
  SfIconPinterest,
  SfIconTwitter,
  SfIconYoutube,
  SfButton,
  SfLink,
  SfListItem,
} from '@storefront-ui/vue';
const socialMedia = [
  {
    label: 'Facebook',
    link: '#',
    icon: SfIconFacebook,
  },
  {
    label: 'Twitter',
    link: '#',
    icon: SfIconTwitter,
  },
  {
    label: 'Instagram',
    link: '#',
    icon: SfIconInstagram,
  },
  {
    label: 'Pinterest',
    link: '#',
    icon: SfIconPinterest,
  },
  {
    label: 'Youtube',
    link: '#',
    icon: SfIconYoutube,
  },
];
const bottomLinks = [
  {
    label: 'Terms',
    link: '#',
  },
  {
    label: 'Privacy policy',
    link: '#',
  },
];
</script>

