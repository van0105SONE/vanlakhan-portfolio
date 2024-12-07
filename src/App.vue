<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />

  <FooterBar />
</template>

<style scoped>
</style>
