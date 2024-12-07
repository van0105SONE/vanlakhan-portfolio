<script setup>
</script>
<template>
  <div class="container mx-auto">
    <div class="navbar text-white">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-black lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
          >
            <li><a>About Me</a></li>
            <li><a>Experience</a></li>
            <li><a>Volunteer & Activity</a></li>
            <li><a>Course</a></li>
          </ul>
        </div>

        <div class="avatar mx-2">
          <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
            <img src="C:\Users\HP\Desktop\my-projects\vanlakhan_portfolio\public\image\icon.jpg" />
          </div>
        </div>
      </div>

      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 text-black">
          <li><a>About Me</a></li>
          <li><a>Exerience</a></li>
          <li><a>Volunteer & Activity</a></li>
          <li><a>Course</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>