<script setup>
import { RouterView } from 'vue-router'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <div data-theme="cupcake">
    <RouterView />

    <FooterBar />
  </div>
</template>

