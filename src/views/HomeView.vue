<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ExperienceComponent from '@/components/ExperienceComponent.vue'

// Carousel items
const items = ref([
  {
    image: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
    title: 'Hello there',
    description:
      'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'
  },
  {
    image: '/public/image/background_2.jpeg',
    title: 'Hello there',
    description:
      'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
    title: 'Hello there',
    description:
      'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
    title: 'Hello there',
    description:
      'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'
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
  <main>
    <section>
      <div class="relative">
        <div
          class="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        ></div>
        <div class="container mx-auto">
          <div
            class="flex min-h-[550vh] max-w-[100vw] flex-col items-center justify-start xl:flex-row xl:items-start"
          >
            <!-- Card Section (20% width on desktop, full width on mobile) -->
            <div class="w-full xl:sticky xl:top-0 shrink xl:w-[20%]">
              <div class="card bg-gray-100 xl:w-full drop-shadow-xl mx-6 my-4">
                <div class="flex items-center justify-center text-center px-4 pt-4">
                  <div>
                    <!-- Avatar -->
                    <div class="avatar">
                      <div class="w-44 rounded-full">
                        <img src="/public/image/img_1269.jpeg" />
                      </div>
                    </div>

                    <!-- Content -->
                    <div class="my-2">
                      <span> Hello, human🎉. </span>
                      <p>
                        My name is
                        <span
                          class="bg-gradient-to-r from-mt-blue to-mt-green text-transparent font-bold bg-clip-text"
                        >
                          Vanlakhan INSYXIENGMAI </span
                        >, a full-stack developer with a fresh graduation from university. I am
                        passionate about coding and solving complex problems, which motivates me to
                        live a fulfilling life 🏕️🏜️.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex justify-center my-2">
                  <button
                    class="btn bg-gradient-to-r from-mt-blue to-mt-green text-white animate-bounce"
                  >
                    <a href="/public/files/vanlakhan-cv.pdf" download>Resume⬇️</a>
                  </button>
                </div>
                <div class="flex flex-row justify-center text-xl text-black my-2">
                  <a href="https://github.com/van0105SONE" class="mx-2">
                    <span> <font-awesome-icon :icon="['fab', 'github']" size="xl" /></span>
                  </a>

                  <a href="https://web.facebook.com/chanthakhan.isxm" class="mx-2">
                    <span> <font-awesome-icon :icon="['fab', 'facebook']" size="xl" /></span>
                  </a>

                  <a href="" class="mx-2">
                    <span>
                      <font-awesome-icon :icon="['fab', 'square-instagram']" size="xl"
                    /></span>
                  </a>

                  <a
                    href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                    class="mx-2"
                  >
                    <span> <font-awesome-icon :icon="['fab', 'linkedin']" size="xl" /></span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Experiences Section (70% width on desktop, full width on mobile) -->
            <div class="w-full px-10 my-6 xl:w-[70%]">
              <div class="flex flex-col">
                <div class="text-center text-4xl font-bold">
                  <span class="inline-grid text-center"
                    ><span
                      class="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] before:content-[attr(data-text)] [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                      aria-hidden="true"
                      data-text="component library"
                    ></span>
                    <span
                      class="[&amp;::selection]:text-base-content text-center relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                      ><!--[-->Experiences<!--]--></span
                    ></span
                  >
                </div>

                <!-- Card -->

                <ExperienceComponent
                  :is-reverse="false"
                  :position="'Backend Developer💻'"
                  :color="'#dc34c3'"
                  :company="'ATCODE'"
                  :country="'Laos'"
                  :description="'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'"
                />

                <ExperienceComponent
                  :is-reverse="true"
                  :position="'(Remote🏠) Software developer🧑‍💻'"
                  :color="'#f18b31'"
                  :company="'DGT Asia limited'"
                  :country="'Hongkong'"
                  :description="'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'"
                />

                <ExperienceComponent
                  :is-reverse="false"
                  :position="'Software developer🧑‍💻'"
                  :color="'#448cf7'"
                  :company="'LTS VENTURES'"
                  :country="'Laos'"
                  :description="'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'"
                />
              </div>

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
                            <button class="btn btn-primary">Get Started</button>
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

              <div class="flex flex-col mt-20">
                <div class="text-center text-4xl font-bold">
                  <span class="inline-grid text-center"
                    ><span
                      class="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] before:content-[attr(data-text)] [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                      aria-hidden="true"
                      data-text="component library"
                    ></span>
                    <span
                      class="[&amp;::selection]:text-base-content text-center relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                      ><!--[-->Skills<!--]--></span
                    ></span
                  >
                </div>

                <div class="mockup-window h bg-gray-300 border mt-10 mx-4">
                  <div class="bg-base-200 min-h-[50vh] flex justify-center px-4 py-16">
                    <div class="grid grid-cols-4 mx-auto mt-12">
                      <div class="mx-auto my-4">
                        <img class="w-20 h-20" src="/public/image/c-sharp.png" alt="Burger" />
                      </div>
                      <div class="mx-auto my-4">
                        <img class="w-20 h-20" src="/public/image/typescript.png" alt="Burger" />
                      </div>
                      <div class="mx-auto my-4">
                        <img class="w-20 h-20" src="/public/image/Java.png" alt="Burger" />
                      </div>
                      <div class="mx-auto my-4">
                        <img class="w-20 h-20" src="/public/image/Python.png" alt="Burger" />
                      </div>
                      <div class="mx-auto my-4">
                        <img class="w-20 h-20" src="/public/image/js.png" alt="Burger" />
                      </div>
                      <div class="mx-auto my-4">
                        <img class="w-20 h-20" src="/public/image/NET.png" alt="Burger" />
                      </div>
                      <div class="mx-auto my-4">
                        <img class="w-20 h-20" src="/public/image/NET core.png" alt="Burger" />
                      </div>
                      <div class="mx-auto my-4">
                        <img class="w-20 h-20" src="/public/image/Nest.png" alt="Burger" />
                      </div>

                      <div class="mx-auto my-4">
                        <img class="w-20 h-20" src="/public/image/Vue.js.png" alt="Burger" />
                      </div>
                      <div class="mx-auto my-4">
                        <img class="w-20 h-20" src="/public/image/flutter.png" alt="Burger" />
                      </div>

                      <div class="mx-auto my-4">
                        <img class="w-20 h-20" src="/public/image/PostgresSQL.png" alt="Burger" />
                      </div>
                      <div class="mx-auto my-4">
                        <img class="w-20 h-20" src="/public/image/MongoDB.png" alt="Burger" />
                      </div>
                      <div class="mx-auto my-4">
                        <img class="w-20 h-20" src="/public/image/Linux.png" alt="Burger" />
                      </div>
                      <div class="mx-auto my-4">
                        <img class="w-20 h-20" src="/public/image/Docker.png" alt="Burger" />
                      </div>
                      <div class="mx-auto my-4">
                        <img class="w-20 h-20" src="/public/image/RabbitMQ.png" alt="Burger" />
                      </div>
                      <div class="mx-auto my-4">
                        <img class="w-20 h-20" src="/public/image/AWS.png" alt="Burger" />
                      </div>
                      <div class="mx-auto my-4">
                        <img class="w-20 h-20" src="/public/image/Jira.png" alt="Burger" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.grid {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, #80808012 1px, transparent 1px),
    linear-gradient(to bottom, #80808012 1px, transparent 1px);
  background-size: 24px 24px;
}

.gradient-dots-container {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, #f7aa05, #d9dee2);
  position: relative;
  overflow: hidden;
}

.gradient-dots-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgb(255, 255, 255) 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>
