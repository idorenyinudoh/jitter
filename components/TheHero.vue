<script setup lang="ts">
const welcomeVideo = useTemplateRef('welcome')

onMounted(() => {
  const video = welcomeVideo.value

  if (video) {
    video.addEventListener('loadeddata', () => {
      video.play()
    })
  }
})
</script>

<template>
  <div>
    <div class="sm:w-[400px] lg:w-[860px] xl:w-[1180px] mx-auto pb-20 xl:pb-[100px] xl:pt-0.5 flex flex-col gap-y-[35px] lg:gap-y-[30px] 2xl:gap-y-10 items-center">
      <NuxtLink to="#" class="w-max rounded-[40px] px-[21px] py-[8.5px] xl:py-2.5 2xl:py-[9px] bg-[#F2F1F3]">
        <p class="-tracking-[0.32px] text-[15px] leading-[1.2]"><span class="font-semibold">New:</span> Infinite Canvas <span class="ml-[5px] text-[#7A40ED] font-semibold">Learn more</span></p>
      </NuxtLink>
      <h1 class="max-lg:max-w-80 font-twk-lausanne text-[64px] lg:text-[80px] xl:text-[115px] 2xl:text-[140px] font-extrabold text-center leading-[84%] lg:leading-[90%] -tracking-[2.4px] xl:-tracking-[3.6px] 2xl:-tracking-[4.5px]">Super <br class="lg:hidden"> fast motion <br> for every team</h1>
      <button class="h-[60px] rounded-[50px] px-[50px] py-2 bg-[#B593FF] font-twk-lausanne text-xl font-semibold">Try Jitter for free</button>
    </div>
    <div class="lg:w-[860px] xl:w-[1180px] 2xl:w-[1320px] mx-auto flex flex-col items-center overflow-hidden">
      <p class="relative lg:w-max sm:w-[400px] mx-5 sm:mx-auto mb-10 text-[15px] font-normal -tracking-[0.3px] leading-[150%] text-center lg:before:absolute lg:before:top-1/2 lg:before:right-[calc(100%+30px)] lg:before:h-[1px] lg:before:w-[50vw] lg:before:bg-[#E5E4E7] lg:after:absolute lg:after:top-1/2 lg:after:left-[calc(100%+30px)] lg:after:h-[1px] lg:after:w-[50vw] lg:after:bg-[#E5E4E7]"><span class="font-semibold">Over 20,000 creative teams use Jitter</span> to create stunning animations online.</p>
      <TheHeroMarquee />
      <div class="w-[calc(100%-40px)] lg:w-[860px] xl:w-[1180px] 2xl:w-[1320px] max-lg:max-w-[400px] mx-auto mt-[125px] lg:mt-[180px] aspect-[1320/824] flex justify-center items-center bg-[#F2F1F3]">
        <div class="w-3/4 lg:w-[67%] aspect-[736/460]">
          <video ref="welcome" class="h-full object-cover" src="~/assets/videos/welcome-to-jitter.mp4" autoplay loop playsinline muted />
        </div>
      </div>
    </div>
    <p class="w-[calc(100%-40px)] lg:w-[860px] xl:w-[1180px] 2xl:w-[1320px] max-lg:max-w-[400px] mt-[165px] lg:mt-[220px] xl:mt-[306px] 2xl:mt-[350px] mb-[60px] xl:mb-40 2xl:mb-[200px] mx-auto lg:pr-64 xl:pr-80 2xl:pr-96 font-twk-lausanne text-4xl lg:text-[40px] xl:text-[56px] 2xl:text-6xl font-extrabold -tracking-[1.5px] xl:-tracking-[2.4px] leading-none text-[#D7D7DB]">Jitter makes motion accessible to every designer, enabling creative teams to collaborate on and deliver engaging animations in record time.</p>
  </div>
</template>