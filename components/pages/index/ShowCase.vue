<template>
  <div
    class="Showoff w-full h-full sm:min-h-screen md:min-h-full items-center max-w-full pb-10 md:pb-0 bg-gray-100"
  >
    <div class="mx-auto flex flex-col w-full pt-16">
      <h1 class="line self-center text-center inline-block lg:text-6xl text-5xl font-bold">Portfolio</h1>
      <p id="notext" class="text-xl text-center font-sans font-semibold text-gray-600 mb-10 mx-10">
        This is just the finest selection from my
        <a
          href="https://github.com/x-N0"
          target="_blank"
          class="underline hover:text-blue-300"
        >Github</a>
        (and others) for you to see some of my skillset hands on real projects
        from the real world.
      </p>
      <pre>{{ 
        }}</pre>
    </div>
    <div class="showoff flex flex-col w-full items-center min-h-screen">
      <div class="bigwrapper flex flex-row flex-wrap justify-center">
        <CardCarousel v-for="(i, x) in biggies" data :key="x"></CardCarousel>
      </div>
      <div class="sawhort-wrapper hidden flex flex-wrap flex-row justify-center mx-auto mb-5">
        <cardPizzaBox v-for="(i, x) in tinys" :key="x"></cardPizzaBox>
      </div>
      <button
        class="border self-center block px-10 py-2 bg-blue-400 rounded-lg hover:animate-pulse font-bold"
      >Show More</button>
    </div>
  </div>
</template>

<script lang="ts">
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
// import JSONdata from 'static/Showcase/Projects/test_num_one/data'
import showoffCarousel from '@/mixins/showoffCarousel.ts'
import consoleMixin from '@/mixins/console.ts'
import { Component, mixins } from 'nuxt-property-decorator'
import CardCarousel from './atoms/CardCarousel.vue'
import CardPizzaBox from './atoms/CardPizzaBox.vue'

@Component({
  components: {
    CardCarousel,
    CardPizzaBox,
  },

})
export default class ShowCase extends mixins(showoffCarousel, consoleMixin) {
  name: string = 'ShowCase'


  get tinys() {
    return 0 //this.projectsCache
  }

  get biggies() {
    const percentage = 0.7
    // const nprojects = this.projectsCache.length
    return 0 //this.projectsCache.splice(0, nprojects * percentage)
  }
}
</script>

<style lang="scss">
//@import 'node_modules/slick-carousel/slick/slick.css';
.slick-slider {
  width: 100%;
  max-width: 720px;
}
</style>
