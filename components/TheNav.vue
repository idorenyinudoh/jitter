<template>
  <div class="fixed top-0 left-0 right-0 px-2.5 lg:px-[30px] xl:px-[40px] w-[calc(100vw-20px)] sm:w-[420px] lg:w-[920px] xl:w-[1260px] 2xl:w-[1400px] h-[100px] lg:h-[129px] mx-auto flex max-lg:items-center">
    <nav class="lg:mt-auto w-full h-[52px] lg:h-[90px] flex justify-between items-center">
      <div class="h-full flex gap-x-10 lg:gap-x-6 xl:gap-x-10 items-center">
        <NuxtLink to="/" class="lg:mb-2 max-lg:ml-2.5">
          <img src="~/assets/images/jitter-black-logo.svg" class="max-lg:w-[68px] max-lg:h-6" />
        </NuxtLink>
        <ul class="h-full max-lg:hidden flex items-center">
          <li class="h-full flex items-center">
            <NuxtLink to="#" class="px-6 lg:px-5 xl:px-6 font-semibold">Product</NuxtLink>
          </li>
          <li class="h-full flex items-center">
            <NuxtLink to="#" class="px-6 lg:px-5 xl:px-6 font-semibold">Customers</NuxtLink>
          </li>
          <li class="h-full flex items-center">
            <NuxtLink to="#" class="px-6 lg:px-5 xl:px-6 font-semibold">Templates</NuxtLink>
          </li>
          <li class="h-full flex items-center">
            <NuxtLink to="#" class="px-6 lg:px-5 xl:px-6 font-semibold">Pricing</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex gap-x-2.5 lg:gap-x-[30px] items-center">
        <NuxtLink to="#" class="font-semibold">Log in</NuxtLink>
        <div>
          <NuxtLink to="#" class="max-lg:hidden flex justify-center items-center px-[50px] py-2 lg:px-8 h-[52px] rounded-[50px] bg-primary font-twk-lausanne text-lg text-white font-semibold -tracking-[0.36px]">Try for free</NuxtLink>
          <button class="lg:hidden w-[52px] h-[52px] rounded-full flex justify-center items-center bg-[#F2F1F3]">
            <svg width="16" height="10" viewBox="0 0 16 10" class="fill-primary" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 10H15.5V8.33333H0.5V10ZM0.5 5.83333H15.5V4.16667H0.5V5.83333ZM0.5 0V1.66667H15.5V0H0.5Z"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>