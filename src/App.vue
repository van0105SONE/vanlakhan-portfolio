<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

// variable
let isThemeChange = false
let themeName = 'lemonade'

function changeTheme() {
  isThemeChange = !isThemeChange

  console.log('is theme attribute change: ', isThemeChange)
  if (isThemeChange) {
    themeName = 'dark'
  } else {
    themeName = 'lemonade'
  }

  console.log(themeName)
}
</script>

<template>
  <div :data-theme="dark">
    <header>
      <NavBar :theme-callback="changeTheme" />
    </header>

    <RouterView />

    <FooterBar />
  </div>
</template>

<style scoped>
</style>
