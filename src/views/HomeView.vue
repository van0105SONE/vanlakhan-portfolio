<script setup>
import ExperienceComponent from '@/components/ExperienceComponent.vue'
import ProjectComponent from '@/components/ProjectComponent.vue'
import SkillComponent from '@/components/SkillComponent.vue'
import ActivityComponent from '@/components/ActivityComponent.vue'
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
                  :description="''"
                >
                  <ul class="list-none space-y-2">
                    <li class="flex items-center">
                      <span class="w-5 h-5 mr-2 text-blue-500">💻</span>
                      <p>
                        <span class="font-bold">Designed and developed </span>
                        scalable lottery backend systems from concept to deployment, leveraging
                        technologies Nestjs to handle high-traffic workloads and ensure 99.9% system
                        uptime
                      </p>
                    </li>
                    <li class="flex items-center">
                      <span class="w-5 h-5 mr-2 text-blue-500">💵</span>
                      <p>
                        <span class="font-bold">Integrated mobile payment</span> gateways into the
                        backend system and implementing encryption protocols to safeguard sensitive
                        customer data.
                      </p>
                    </li>
                    <li class="flex items-center">
                      <span class="w-5 h-5 mr-2 text-purple-500">🎯</span>
                      <p>
                        <span class="font-bold"> Optimized database performance</span>
                        by implementing database replica (read and write),table partition and query
                        optimization techniques, reducing query response times by 20%.
                      </p>
                    </li>
                  </ul>
                </ExperienceComponent>

                <ExperienceComponent
                  :is-reverse="true"
                  :position="'(Remote🏠) Software developer🧑‍💻'"
                  :color="'#f18b31'"
                  :company="'DGT Asia limited'"
                  :country="'Hongkong'"
                  :description="'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'"
                >
                  <ul class="list-none space-y-2">
                    <li class="flex items-center">
                      <span class="w-5 h-5 mr-2 text-blue-500">💻</span>
                      <p>
                        <span class="font-bold">Maintained and enhanced</span>
                        a high-availability casino management system, ensuring 99.99% uptime and
                        seamless operation for 24/7 gaming environments.
                      </p>
                    </li>
                    <li class="flex items-center">
                      <span class="w-5 h-5 mr-2 text-blue-500">💵</span>
                      <p>
                        <span class="font-bold">Developed and deployed new features</span>
                        to support Sale and redemption product in casino.
                      </p>
                    </li>
                    <li class="flex items-center">
                      <span class="w-5 h-5 mr-2 text-purple-500">🎯</span>
                      <p>
                        <span class="font-bold"> Troubleshot and resolved critical system</span>
                        issues in production environments, minimizing downtime and ensuring
                        uninterrupted casino operations during peak hours.
                      </p>
                    </li>
                  </ul>
                </ExperienceComponent>

                <ExperienceComponent
                  :is-reverse="false"
                  :position="'Software developer🧑‍💻'"
                  :color="'#448cf7'"
                  :company="'LTS VENTURES'"
                  :country="'Laos'"
                  :description="'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'"
                >
                  <ul class="list-none space-y-2">
                    <li class="flex items-center">
                      <span class="w-5 h-5 mr-2 text-blue-500">💻</span>
                      <p>
                        <span class="font-bold">Contributed</span>
                        to the development of a microfinance software solution, enabling seamless
                        loan management, repayment tracking, and financial reporting for over 10,000
                        users
                      </p>
                    </li>
                    <li class="flex items-center">
                      <span class="w-5 h-5 mr-2 text-blue-500">💵</span>
                      <p>
                        <span class="font-bold">Developed and launched</span>
                        a responsive company portfolio and customer website using modern web
                        technologies (e.g., HTML5, CSS3, JavaScript, vue).
                      </p>
                    </li>
                  </ul>
                </ExperienceComponent>
              </div>

              <ProjectComponent />

              <SkillComponent />

              <ActivityComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
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
