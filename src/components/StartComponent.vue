<template>
  <div class="container mx-auto">
    <div class="relative">
      <div
        class="absolute -top-10 left-10 w-[600px] h-[600px] bg-white rounded-full filter blur-3xl opacity-60"
      ></div>

      <div
        class="hidden lg:block absolute -top-10 -right-10 w-[600px] h-[600px] bg-white rounded-full filter blur-3xl opacity-60"
      ></div>

      <div
        class="absolute -top-100 -left-10 w-[200px] h-[200px] bg-white rounded-full filter blur-3xl opacity-60"
      ></div>
    </div>
    <div class="flex lg:flex-row flex-col mt-12 md:mt-0">
      <div class="flex-1 text-center font-noto-sans my-auto">
        <div class="flex flex-col mx-4 animate-slideRight">
          <div class="text-white">
            <h2 class="text-4xl my-2">VANLAKHAN INSYXIENGMAI</h2>
            <h2 class="text-4xl my-2">Full Stack Developer</h2>
          </div>
          <div class="my-5">
            <button class="btn btn-outline btn-warning">
              <a href="/public/files/vanlakhan-cv.pdf" download>Resume</a>
            </button>
          </div>
          <div class="flex flex-row justify-center text-2xl text-white">
            <a href="https://github.com/van0105SONE" class="mx-2">
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

      <div class="flex-1">
        <div class="avatar drop-shadow-[0_35px_35px_rgba(99,99,99,0.25)] animate-slideLeft">
          <div
            class="mask mask-hexagon w-96 h-96 lg:w-auto lg:h-auto mx-20 lg:mx-54 lg:mx-auto my-24"
          >
            <img src="/public/image/img_1269.jpeg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>