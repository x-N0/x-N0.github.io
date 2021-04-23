<!--suppress JSValidateTypes -->
<template>
  <div
    v-if="isOpen"
    class="flex flex-col justify-center fixed inset-0 w-full max-h-full bg-opacity-50 bg-black z-10"
  >
    <div
      class="absolute h-full w-full -z-10"
      @click="setIsOpen(false)"
    />
    <!--suppress HtmlUnknownTag -->
    <style v-if="isOpen">
      body {
        overflow-y: hidden !important;
      }
    </style>
    <div
      class="viewer flex flex-col lg:min-h-3/4 lg:flex-row items-center rounded-2xl self-center w-8/12 lg:w-11/12 bg-white-100 shadow-2xl z-0"
    >
      <div class="flex flex-col h-full w-11/12 lg:w-full rounded-lg my-4">
        <button
          class="px-2 mt-2 text-sm bg-gray-300 bg-opacity-70 rounded-xl lg:mt-4 lg:mr-6 block self-end"
        >
          En uso:
          <span class="text-verde-300">Vista Simple</span>
        </button>
        <div
          class="bg-white-100 my-auto mx-auto lg:min-h-3/4 min-h-1/2 h-64 w-full lg:w-11/12 rounded-2xl shadow-lg flex flex-col"
        >
          <VueSlickCarousel
            class="h-full w-full flex flex-col self-center justify-center"
            v-bind="slickOptions"
          >
            <div
              v-for="(x, i) in pMedia"
              :key="i"
              class="img-wrapper content-center"
            >
              <img
                :ondragstart="`return false`"
                :src="require(`@/assets/projects/${x}`)"
                alt
                class="object-contain select-none w-full h-full block"
              />
            </div>
          </VueSlickCarousel>
        </div>
      </div>
      <div
        class="w-full h-full overflow-y-auto overflow-x-hidden max-h-80 lg:w-8/12"
      >
        <div class="text-right m-auto">
          <button type="button" class="bg-white mr-5 mt-5 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Close menu</span>
            <!-- Heroicon name: outline/x -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="title-right ml-10 lg:ml-5 mb-2 w-full">
          <h1
            class="title-right md:pt-4 font-medium relative md:text-3xl lg:text-2xl text-2xl text-verde-100 w-full1 bg-opacity-30"
          >
            {{ currentProject.type }}
          </h1>
          <h2 class="text-md -right-14 relative text-amarelo-300 font-semibold">
            {{ currentProject.name }}
          </h2>
        </div>
        <div
          class="flex flex-col w-full text-gray-1000 overflow-y-auto h-90 rounded-md font-light text-sm lg:text-base"
        >
          <div
            class="w-10/12 h-full mt-3 lg:mt-0 py-4 lg:py-2 lg:px-2 rounded-lg mx-auto ml-14 px-4"
          >
            <h4 class="font-bold">Contexto</h4>
            <p class="text-md lg:text-sm">
              {{ currentProject.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'
import CardCarousel from '../pages/index/atoms/CardCarousel.vue'
import ModalViewerStatus from '~/store/modules/ModalViewer.ts'

interface ISingleProject {
  media: [string]
}

@Component({
  components: { CardCarousel },
  watchQuery: true
})
export default class ProjectViewer extends Vue {
  // TODO: Since img processing will need to do entire rebuild, maybe its better to use external urlimages: https://www.imgix.com/
  // Basic data.
  pName!: string
  pDate!: Date
  pDescription!: string

  // p = Project
  pUrl!: string

  @Prop({
    type: Object,
    required: true
  })
  private singleProject!: ISingleProject

  pMedia: string[] = this.singleProject.media

  @Prop({
    type: Boolean,
    required: false,
    default: false
  })
  private isAdvancedMode!: Boolean

  private slickOptions: Object = {
    slidesToShow: 1,
    arrows: false
    // slidesToScroll: 1,
  }

  get isOpen() {
    return ModalViewerStatus.isOpen
  }

  get currentProject() {
    return ModalViewerStatus.currentProject
  }

  get currentProjectQuery() {
    return this.$route.query.project
  }

  setIsOpenStatus = (state: boolean) => ModalViewerStatus.setIsOpen(state)

  created() {
    this.setCurrentProject()
  }

  mounted() {
    if (this.$route.query.project) {
      this.setIsOpenStatus(true)
    }
  }

  @Watch('isOpen')
  onIsOpenChange() {
    if (!this.isOpen) {
      // Closed set path to /
      this.$router.replace(this.$route.path)
    }
  }

  @Watch('currentProjectQuery')
  oncurrentProjectQueryChange() {
    if (this.currentProjectQuery) {
      this.setCurrentProject()
    }
  }

  setCurrentProject() {
    if (this.currentProjectQuery) {
      const slug = `/projects/${this.currentProjectQuery}`
      ModalViewerStatus.setCurrentProject(slug)
    }
  }
}
</script>

<style scoped>
.scrollable {
  max-height: 55%;
  min-height: 50%;
}

.viewer {
  max-height: 80%;
}

*:focus {
  outline: none;
}

/* @media screen and (min-width: 400px) {
  .img-wrapper{
  height: 450px;
  width: 600px
}
}

@media screen and (min-width: 800px) {
  .img-wrapper{
  height: 450px;
  width: 600px
}
} */

div > img {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
}
.img-wrapper {
  width: 700px;
  height: 450px;
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin: 0;
}

</style>
