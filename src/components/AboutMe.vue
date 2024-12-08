<template>
  <div class="container mx-auto">
    <div class="flex lg:flex-row flex-col">
      <div class="flex-1">
        <div class="avatar drop-shadow-[0_35px_35px_rgba(99,99,99,0.25)] animate-slideLeft">
          <div
            class="mask mask-hexagon w-96 h-96 lg:w-auto lg:h-auto mx-20 lg:mx-54 lg:mx-auto my-24"
          >
            <img src="/public/image/img_1269.jpeg" />
          </div>
        </div>
      </div>

      <div class="flex-1 text-center font-pacifico my-auto">
        <div class="flex flex-col mx-4 animate-slideRight">
          <div>
            <h2 class="text-6xl">Hello!</h2>
            <p class="text-2xl mt-16">
              Hi everyone! I’m Vanlakhan (Kileang), a software engineer who loves to solve problems
              and create new things. I strongly believe coding can make a larger impact on my
              community and the world.
            </p>
          </div>

          <div class="flex flex-row mt-10 justify-center text-2xl">
            <a href="" class="mx-2">
              <span> <font-awesome-icon :icon="['fab', 'github']" size="xl" /></span>
            </a>

            <a href="https://web.facebook.com/chanthakhan.isxm" class="mx-2">
              <span> <font-awesome-icon :icon="['fab', 'facebook']" size="xl" /></span>
            </a>

            <a href="" class="mx-2">
              <span> <font-awesome-icon :icon="['fab', 'square-instagram']" size="xl" /></span>
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
    </div>
  </div>
</template>