<script setup lang="ts">
import SplitType from 'split-type'
const { gsap } = useGSAP()

const welcomeVideo = useTemplateRef('welcome')

onMounted(() => {
  const video = welcomeVideo.value
  const text = SplitType.create('p.intro-text', { types: 'words', tagName: 'span' })
  gsap.set(text.words, { opacity: 0.1 })

  if (video) {
    video.addEventListener('loadeddata', () => {
      video.play()
    })
  }

  gsap.to(text.words, {
    opacity: 1,
    ease: 'power3.out',
    stagger: 0.7,
    duration: 7,
    scrollTrigger: {
      trigger: 'p.intro-text',
      start: 'top bottom',
      end: '+=80%',
      scrub: true
    }
  })
})
</script>

<template>
  <div>
    <div class="sm:w-[400px] lg:w-[860px] xl:w-[1180px] mx-auto pb-20 xl:pb-[100px] xl:pt-0.5 flex flex-col gap-y-[35px] lg:gap-y-[30px] 2xl:gap-y-10 items-center">
      <NuxtLink to="#" class="w-max rounded-[40px] px-[21px] py-[8.5px] xl:py-2.5 2xl:py-[9px] bg-[#F2F1F3]">
        <p class="-tracking-[0.32px] text-[15px] leading-[1.2]"><span class="font-semibold">New:</span> Infinite Canvas <span class="ml-[5px] text-[#7A40ED] font-semibold">Learn more</span></p>
      </NuxtLink>
      <h1 class="max-lg:max-w-80 font-twk-lausanne text-[64px] lg:text-[80px] xl:text-[115px] 2xl:text-[140px] font-extrabold text-center leading-[84%] lg:leading-[90%] -tracking-[2.4px] xl:-tracking-[3.6px] 2xl:-tracking-[4.5px]">Super <br class="lg:hidden"> fast motion <br> for every team</h1>
      <button class="h-[60px] rounded-[50px] px-[50px] py-2 bg-[#B593FF] font-twk-lausanne text-xl font-semibold hover:scale-105 duration-[.6s] ease-[linear(0,0.255,0.4449,0.6018,0.7355,0.8513,0.9525,1.0413,1.1195,1.1881,1.2484,1.3011,1.3468,1.3862,1.4198,1.4479,1.4709,1.4892,1.503,1.5126,1.5182,1.52,1.5189,1.5156,1.5101,1.5025,1.4929,1.4817,1.469,1.4552,1.4406,1.4254,1.4099,1.3943,1.3787,1.3633,1.3481,1.3333,1.3188,1.3048,1.2912,1.278,1.2653,1.253,1.2412,1.2298,1.2188,1.2083,1.1981,1.1883,1.1789,1.1698,1.1611,1.1528,1.1447,1.137,1.1296,1.1225,1.1156,1.1091,1.1028,1.0967,1.0909,1.0854,1.0801,1.075,1.0701,1.0654,1.061,1.0567,1.0526,1.0488,1.0451,1.0415,1.0382,1.035,1.032,1.0292,1.0265,1.0239,1.0215,1.0193,1.0172,1.0152,1.0134,1.0117,1.0101,1.0086,1.0073,1.0061,1.005,1.004,1.0032,1.0024,1.0018,1.0012,1.0008,1.0004,1.0002,1,1)]">Try Jitter for free</button>
    </div>
    <div class="lg:w-[860px] xl:w-[1180px] 2xl:w-[1320px] mx-auto flex flex-col items-center overflow-hidden">
      <p class="relative lg:w-max sm:w-[400px] mx-5 sm:mx-auto mb-10 text-[15px] font-normal -tracking-[0.3px] leading-[150%] text-center lg:before:absolute lg:before:top-1/2 lg:before:right-[calc(100%+30px)] lg:before:h-[1px] lg:before:w-[50vw] lg:before:bg-[#E5E4E7] lg:after:absolute lg:after:top-1/2 lg:after:left-[calc(100%+30px)] lg:after:h-[1px] lg:after:w-[50vw] lg:after:bg-[#E5E4E7]"><span class="font-semibold">Over 20,000 creative teams use Jitter</span> to create stunning animations online.</p>
      <TheHeroMarquee />
      <div class="w-[calc(100%-40px)] lg:w-[860px] xl:w-[1180px] 2xl:w-[1320px] max-lg:max-w-[400px] mx-auto mt-[125px] lg:mt-[180px] aspect-[1320/824] flex justify-center items-center bg-[#F2F1F3]">
        <div class="w-3/4 lg:w-[67%] aspect-[736/460]">
          <video ref="welcome" class="h-full object-cover" src="~/assets/videos/welcome-to-jitter.mp4" autoplay loop playsinline muted preload="auto" />
        </div>
      </div>
    </div>
    <p class="intro-text w-[calc(100%-40px)] lg:w-[860px] xl:w-[1180px] 2xl:w-[1320px] max-lg:max-w-[400px] mt-[165px] lg:mt-[220px] xl:mt-[306px] 2xl:mt-[350px] mb-[60px] xl:mb-40 2xl:mb-[200px] mx-auto lg:pr-64 xl:pr-80 2xl:pr-96 font-twk-lausanne text-4xl lg:text-[40px] xl:text-[56px] 2xl:text-6xl font-extrabold -tracking-[1.5px] xl:-tracking-[2.4px] leading-none text-black">Jitter makes motion accessible to every designer, enabling creative teams to collaborate on and deliver engaging animations in record time.</p>
  </div>
</template>