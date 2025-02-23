<template>
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
          ><!--[-->Activitys<!--]--></span
        ></span
      >
    </div>

    <div class="relative">
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4 mt-10">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center"
              src="/public/image/IMG_0522.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center"
              src="/public/image/image_1234324.jpeg"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center"
              src="/public/image/img_1270.jpeg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center"
              src="/public/image/my_profile.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center"
              src="/public/image/image_00123.jpeg"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center"
              src="/public/image/img_1268.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>