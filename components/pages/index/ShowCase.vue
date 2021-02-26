<template>
  <div
    class="Showoff w-full h-full sm:min-h-screen md:min-h-full items-center max-w-full pb-10 md:pb-0 bg-gray-100"
  >
    <div class="mx-auto flex flex-col w-full pt-16">
      <h1
        class="line self-center text-center inline-block lg:text-6xl text-5xl font-bold"
      >
        Portfolio
      </h1>
      <p
        id="notext"
        class="text-xl text-center font-sans font-semibold text-gray-600 mb-10 mx-10"
      >
        This is just the finest selection from my
        <a
          href="https://github.com/x-N0"
          target="_blank"
          class="underline hover:text-blue-300"
          >Github</a
        >
        (and others) for you to see some of my skillset hands on real projects
        from the real world.
      </p>
      <!-- <pre>{{ projectsArray }}</pre> -->
    </div>
    <div class="showoff flex flex-col w-full items-center">
      <div class="bigwrapper flex flex-row flex-wrap justify-center">
        <CardCarousel
          v-for="(projectObject, x) in this.projectsArray"
          :key="x"
          :dataObject="projectObject"
        ></CardCarousel>
      </div>
      <!-- <div
        class="sawhort-wrapper hidden flex flex-wrap flex-row justify-center mx-auto mb-5"
      >
        <cardPizzaBox v-for="(i, x) in tinys" :key="x"></cardPizzaBox>
      </div> -->
      <button v-if="isMinShowed"
        class="border self-center block px-10 py-2 bg-blue-400 rounded-lg hover:animate-pulse font-bold"
      >
        Show More
      </button>
      <p class="text-sm text-center font-sans font-semibold text-gray-600 mb-10 mx-10">Expect more to come, right now I'm developing Artificial Intelligence >)</p>
    </div>
    <project-viewer :singleProject="onProject" :isViewerOpen="true"></project-viewer>
  </div>
</template>

<script lang="ts">
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import showoffCarousel from '@/mixins/showoffCarousel.ts'
import consoleMixin from '@/mixins/console.ts'
import { Component, mixins, Prop } from 'nuxt-property-decorator'
import CardCarousel from './atoms/CardCarousel.vue'
import CardPizzaBox from './atoms/CardPizzaBox.vue'
import ProjectViewer from '~/components/misc/ProjectViewer.vue'

@Component({
  components: {
    CardCarousel,
    CardPizzaBox,
    ProjectViewer,
  },
})
export default class ShowCase extends mixins(showoffCarousel, consoleMixin) {
  @Prop(
    {
      default:[{
  "name": "Project Default",
  "description": "This is a default project1.",
  "media": []
}
]}
  )
  private projectsArray!: object[]

  private onProject:Object=this.projectsArray[0]





  
  private projectsArrayCopy:object[]=this.projectsArray
  name: string = 'ShowCase'
  get tinys() {
    return this.projectsArrayCopy
  }
  get biggies() {
    return 0 //this.projectsArrayCopy.splice(0, this.projectsArray.length * 0.7)
  }
  get isMinShowed(){
    const minimum=9
    return this.projectsArray.length>minimum
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
