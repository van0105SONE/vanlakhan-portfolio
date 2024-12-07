<script setup>
import AboutMe from '@/components/AboutMe.vue'
import ExperienceComponent from '@/components/ExperienceComponent.vue'
import ProjectComponent from '@/components/ProjectComponent.vue'
</script>
<template>
  <main>
    <section>
      <AboutMe />
    </section>

    <ProjectComponent />

    <section>
      <ExperienceComponent />
    </section>

    <section>
      <div class="container mx-auto mt-12">
        <div>
          <h6 class="text-4xl text-center font-bold font-pacifico">My Skills</h6>
        </div>
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
            <img class="w-20 h-20" src="/public/image/nest.js.png" alt="Burger" />
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
            <img class="w-20 h-20" src="/public/image/linux.png" alt="Burger" />
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
    </section>
  </main>
</template>
