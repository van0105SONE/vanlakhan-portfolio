<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
// Refs
const animatedElement = ref(null) // Reference to the animated element
const isScrollingDown = ref(false) // Track scroll direction
const lastScrollPosition = ref(0) // Track last scroll position
const shouldSlideIn = ref(true) // Control slide-in animation
const shouldSlideOut = ref(false) // Control slide-out animation

// Scroll handler
const handleScroll = () => {
  const currentScrollPosition = window.scrollY

  // Detect scroll direction
  isScrollingDown.value = currentScrollPosition > lastScrollPosition.value
  lastScrollPosition.value = currentScrollPosition

  // Check the element's position relative to the viewport
  if (animatedElement.value) {
    const elementRect = animatedElement.value.getBoundingClientRect()
    const elementBottom = elementRect.bottom // Distance from the bottom of the viewport
    const threshold = window.innerHeight * 0.2 // 20% of the viewport height

    // Slide in on first load or scroll down
    if (!isScrollingDown.value && elementBottom > window.innerHeight * 0.6) {
      shouldSlideIn.value = true
      shouldSlideOut.value = false
    }

    // Slide out on scroll up when the element is near the top of the screen
    if (isScrollingDown.value && elementBottom < threshold) {
      shouldSlideIn.value = false
      shouldSlideOut.value = true
    }
  }
}

//props
defineProps({
  position: String,
  company: String,
  country: String,
  description: String,
  color: String,
  isReverse: Boolean,
  imagePath: String
})

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Trigger on first load
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <div class="hidden lg:block hero bg-base-200 h-64">
      <div
        ref="animatedElement"
        class="hero-content flex-col animate-slideRight"
        :class="{
          'animate-slideRotateIn': shouldSlideIn,
          'animate-slideRotateOut': shouldSlideOut,
          'lg:flex-row': !isReverse,
          'lg:flex-row-reverse': isReverse
        }"
        id="animatedElement"
      >
        <div class="max-w-sm rounded-lg shadow-2xl"></div>
        <div>
          <h1 class="text-2xl font-bold bg-gradient-to-r from-mt-blue to-mt-green bg-clip-text">
            {{ position }}💻 at <span :class="`text-[${color}]`">{{ company }}</span
            >, {{ country }}🏳️‍🌈
          </h1>
          <div class="py-6 px-4">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="visible lg:hidden mx-auto my-10 card bg-base-100 w-full shadow-xl">
      <figure>
        <div class="max-w-sm rounded-lg shadow-2xl"></div>
      </figure>
      <div class="card-body text-center`">
        <h2 class="text-xl font-bold bg-gradient-to-r from-mt-blue to-mt-green bg-clip-text">
          {{ position }}💻 at <span :class="`text-[${color}]`">{{ company }}</span
          >, {{ country }}🏳️‍🌈
        </h2>
        <slot></slot>
      </div>
    </div>
  </div>
</template>