import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useGSAP = () => {
  gsap.registerPlugin(ScrollTrigger)

  return {gsap, ScrollTrigger}
}