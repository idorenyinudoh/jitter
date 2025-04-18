<script setup lang="ts">
const firstReel = useTemplateRef('first-reel')

onMounted(() => {
  const video = firstReel.value

  if (video) {
    video.addEventListener('loadeddata', () => {
      video.play()
    })
  }
})
</script>

<template>
  <div>
    <div class="lg:min-h-[100dvh] flex justify-center items-center">
      <div class="relative w-[calc(100%-40px)] lg:w-[860px] xl:w-[1180px] 2xl:w-[1320px] max-lg:max-w-[400px] aspect-[860/483] flex flex-col shadow-[0_25px_52px_0_rgba(0,0,0,.33)] overflow-hidden">
        <div class="relative w-full h-2.5 lg:h-[21.5px] xl:h-[29.5px] 2xl:h-[30px] bg-primary grid grid-cols-[1fr_1fr] grid-rows-[10px] lg:grid-rows-[21.5px] xl:grid-rows-[29.5px] 2xl:grid-rows-[30px] items-center">
          <img class="h-full" src="~/assets/images/reel/top-left.svg" alt="">
          <img class="absolute top-0 left-0 right-0 mx-auto h-2.5 lg:h-[21.5px] xl:h-[29.5px]" src="~/assets/images/reel/top-center.svg" alt="">
          <img class="h-full justify-self-end" src="~/assets/images/reel/top-right.svg" alt="">
        </div>
        <div class="flex justify-between bg-[#F2F1F3]">
          <div class=" w-[52.4px] lg:w-[112px] xl:w-[155px] 2xl:w-[173px] bg-white overflow-hidden">
            <img class="w-full" src="~/assets/images/reel/sidebar.svg" alt="">
          </div>
          <div class="w-[52.4px] lg:w-[112px] xl:w-[155px] 2xl:w-[173px] bg-white overflow-hidden">
            <img class="w-full" src="~/assets/images/reel/right-sidebar.svg" alt="">
          </div>
        </div>
        <div class="absolute bottom-0 left-0 w-full grid grid-cols-[52.4px_1fr] lg:grid-cols-[112px_1fr] xl:grid-cols-[155px_1fr] 2xl:grid-cols-[173px_1fr]">
          <div class="w-[52.4px] lg:w-[112px] xl:w-[155px] 2xl:w-[173px] bg-white aspect-square">
            <img class="w-full h-full object-cover" src="~/assets/images/reel/bottom-left.svg" alt="">
          </div>
          <div class="bg-white">
            <img class="absolute top-0 left-[52.4px] lg:left-[112px] xl:left-[155px] 2xl:left-[173px] h-full" src="~/assets/images/reel/bottom-right.svg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="min-h-[100dvh] flex justify-center items-center">
      <div>
        <div class="relative w-[calc(100%-40px)] lg:w-[860px] xl:w-[1180px] 2xl:w-[1320px] max-lg:max-w-[400px] max-lg:mx-auto aspect-[940/609]">
          <p class="absolute -top-[21.3px] left-0 text-[13px] font-medium text-[#7A40ED] leading-[1.1]">Artboard 1 - Showreel</p>
          <div class="absolute -top-[3px] -left-[3px] w-2 h-2 border border-[#7A40ED] bg-white" />
          <div class="absolute -top-[3px] -right-[3px] w-2 h-2 border border-[#7A40ED] bg-white" />
          <div class="absolute -bottom-[3px] -left-[3px] w-2 h-2 border border-[#7A40ED] bg-white" />
          <div class="absolute -bottom-[3px] -right-[3px] w-2 h-2 border border-[#7A40ED] bg-white" />
          <video ref="first-reel" class="border border-[#7A40ED] w-full h-full object-cover" src="~/assets/videos/artboard-1.mp4" autoplay loop playsinline muted />
        </div>
      </div>
    </div>
  </div>
</template>