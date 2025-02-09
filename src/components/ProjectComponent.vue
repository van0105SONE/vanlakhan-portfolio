<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
// Carousel items
const items = ref([
  {
    image: '/public/image/lottery.jpg',
    title: 'Lottery Web api',
    description:
      'Laos lottery system one of micro-service that connect to other services such as auth service, marketing service and other service . The system itself integrate with lao lottery to get lottery number and sell lottery to customer when lottery lot is opened. '
  },
  {
    image: '/public/image/examination.jpg',
    title: 'Examinations',
    description:
      'Api project practice that allowed user to create the group examination, then let other people  joint the group to answer the question. after complete the system will summerize the result and give the points to joiners'
  },
  {
    image: '/public/image/portfolio.png',
    title: 'My Portfolio websites',
    description:
      'the portfolio website for showing my experiences, project that i have done in the past'
  },
  {
    image: '/public/image/ltswebsites.png',
    title: 'LTS Ventures',
    description:
      'It is portfolio website to show company profile, written by using html, css and javascript.'
  }
])

// Active carousel item
const activeIndex = ref(0)

// Function to set the active index
const setActiveIndex = (index) => {
  activeIndex.value = index
}

// Auto-slide functionality
let autoSlideInterval

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % items.value.length
  }, 3000) // Change slide every 3 seconds
}

// Start auto-slide on mount
onMounted(() => {
  startAutoSlide()
})

// Clear interval on unmount
onBeforeUnmount(() => {
  clearInterval(autoSlideInterval)
})
</script>
<template>
  <div class="flex flex-col mt-10">
    <div class="text-center text-4xl font-bold">
      <span class="inline-grid text-center"
        ><span
          class="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] before:content-[attr(data-text)] [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
          aria-hidden="true"
          data-text="component library"
        ></span>
        <span
          class="[&amp;::selection]:text-base-content text-center relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
          ><!--[-->Projects<!--]--></span
        ></span
      >
    </div>
    <div class="relative mt-10">
      <div class="carousel w-full">
        <div
          v-for="(item, index) in items"
          :key="index"
          :id="`item${index + 1}`"
          class="carousel-item w-full"
          :class="{ hidden: activeIndex !== index }"
        >
          <div
            class="hero h-96"
            :style="{
              backgroundImage: `url(${item.image})`
            }"
          >
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-neutral-content text-center">
              <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">{{ item.title }}</h1>
                <p class="mb-5">{{ item.description }}</p>
                <button class="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full justify-center gap-2 py-2">
        <button
          v-for="(item, index) in items"
          :key="index"
          class="btn btn-xs"
          :class="{ 'btn-active': activeIndex === index }"
          @click="setActiveIndex(index)"
        >
          {{ index + 1 }}
        </button>
      </div>
    </div>
  </div>
</template>