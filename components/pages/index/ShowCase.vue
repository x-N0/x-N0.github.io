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
      <div
        class="bigwrapper flex flex-row flex-wrap justify-center"
        @click="isViewerOpen(true)"
      >
        <div
          v-for="(projectObject, x) in projectsArray"
          :key="x"
          class="carrouselwrap"
        >
          <CardCarousel :data-object="projectObject"/>
        </div>
      </div>
      <!-- <div
        class="sawhort-wrapper hidden flex flex-wrap flex-row justify-center mx-auto mb-5"
      >
        <cardPizzaBox v-for="(i, x) in tinys" :key="x"></cardPizzaBox>
      </div> -->
      <button
        v-if="isMinShowed"
        class="border self-center block px-10 py-2 bg-blue-400 rounded-lg hover:animate-pulse font-bold"
      >
        Show More
      </button>
      <p
        class="text-sm text-center font-sans font-semibold text-gray-600 mb-10 mx-10"
      >
        Expect more to come, right now I'm developing Artificial Intelligence >)
      </p>
      <pre>{{ projectsArray[0] }}{{ isOpen }}</pre>
    </div>
    <project-viewer :single-project="onProject" :is-viewer-open="isOpen"/>
  </div>
</template>

<script lang="ts">
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator'
import CardCarousel from './atoms/CardCarousel.vue'
import CardPizzaBox from './atoms/CardPizzaBox.vue'
import ProjectViewer from '~/components/misc/ProjectViewer.vue'
import ModalViewerState from '~/store/modules/ModalViewer.ts'

@Component({
  components: {
    CardCarousel,
    CardPizzaBox,
    ProjectViewer
  }
})
export default class ShowCase extends Vue {
  @Prop({
    default: [
      {
        name: 'Project Default',
        description: 'This is a default project1.',
        media: []
      }
    ]
  })
  private projectsArray!: object[]

  private onProject: object = this.projectsArray[0]

  private projectsArrayCopy: object[] = this.projectsArray

  public changeIsOpen!: (status: boolean) => void

  setIsOpen = (state: boolean) => this.changeIsOpen(state)

  get biggies() {
    return 0 // this.projectsArrayCopy.splice(0, this.projectsArray.length * 0.7)
  }

  get isMinShowed() {
    this.test()
    const minimum = 9
    return this.projectsArray.length > minimum
  }

  @Emit()
  private test() {
    console.log(`test -> ${ModalViewerState.isOpen}`)
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
