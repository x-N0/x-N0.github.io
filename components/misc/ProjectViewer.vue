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
        <div class="text-right">
          <button @click="setIsOpen(false)">X</button>
        </div>
        <div class="title-right ml-10 lg:ml-5 mb-2 w-full">
          <h1
            class="title-right md:pt-4 font-medium relative md:text-3xl lg:text-2xl text-2xl text-verde-100 w-full1 bg-opacity-30"
          >
            Desarrollo de Aplicaciones
          </h1>
          <h2 class="text-md -right-14 relative text-amarelo-300 font-semibold">
            Aplicación web colaborativa
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nunc, at vestibulum libero ultrices nisl. Libero,
              ullamcorper morbi sagittis et id turpis volutpat sit maecenas.
              Orci erat sed porta justo tempor tristique amet erat viverra.
              Mollis diam pharetra, sit adipiscing pharetra.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import CardCarousel from '../pages/index/atoms/CardCarousel.vue'
import ModalViewerStatus from '~/store/modules/ModalViewer.ts'

interface ISingleProject {
  media: [string]
}

@Component({
  components: { CardCarousel }
})
export default class ProjectViewer extends Vue {
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

  setIsOpen = (state: boolean) => ModalViewerStatus.setIsOpen(state)

  created() {
    this.enrouteModal()
  }

  // @Watch('route')
  // routeWarcher=this.$route(from, to)=> this.enrouteModal();
  //
  enrouteModal() {
    if (this.$route.params.modal) {
      console.log('Modal')
    } else {
      console.log('NoModal')
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
</style>
