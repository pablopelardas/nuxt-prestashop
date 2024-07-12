<script setup lang="ts">
</script>

<template>
  <div class="mx-auto flex flex-col justify-between min-h-[100vh]">
    <header class="w-full">
      <vue-header />
    </header>
<!--    <ul>-->
<!--      <li><nuxt-link to="/">Home</nuxt-link></li>-->
<!--      <li><nuxt-link to="/plp">Plp</nuxt-link></li>-->
<!--      <li><nuxt-link to="/pdp">Pdp</nuxt-link></li>-->
<!--      <li><nuxt-link to="/cart">Cart</nuxt-link></li>-->
<!--      <li><nuxt-link to="/checkout">Checkout</nuxt-link></li>-->
<!--    </ul>-->
    <main class="w-full flex-1 mx-auto px-4 md:px-10 my-8 max-w-[1536px]">
      <slot />
    </main>
    <footer class="w-full">
      <vue-footer />
    </footer>
  </div>
</template>

<style scoped></style>
