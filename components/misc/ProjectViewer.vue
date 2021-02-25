<template>
  <div
    class="flex flex-col justify-center fixed inset-0 w-full max-h-full bg-opacity-50 bg-black"
    v-if="isViewerOpen"
  >
    <div
      class="viewer flex flex-col lg:min-h-3/4 lg:flex-row items-center rounded-2xl self-center w-8/12 lg:w-11/12 bg-white-100 shadow-2xl"
    >
      <div class="flex flex-col h-full w-11/12 lg:w-full rounded-lg my-4">
        <button class="px-2 mt-2 text-sm bg-gray-300 bg-opacity-70 rounded-xl lg:mt-4 lg:mr-6 block self-end">
          En uso:
          <span class="text-verde-300">Vista Simple</span>
        </button>
        <div class="bg-white-100 my-auto mx-auto lg:min-h-3/4 min-h-1/2 h-64 w-full lg:w-11/12 rounded-2xl shadow-lg">
          <!-- <img class="h-full w-full object-cover rounded-2xl" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"> -->
        </div>
      </div>
      <div class="w-full h-full overflow-y-auto overflow-x-hidden max-h-80 lg:w-8/12">
        <div class="title-right ml-10 lg:ml-5 mb-2 w-full">
          <h1
            class="title-right md:pt-4 font-medium relative md:text-3xl lg:text-2xl text-2xl text-verde-100 w-full1 bg-opacity-30"
          >Desarrollo de Aplicaciones</h1>
          <h2
            class="text-md -right-14 relative text-amarelo-300 font-semibold"
          >Aplicación web colaborativa</h2>
        </div>
        <div
          class="flex flex-col w-full text-gray-1000 overflow-y-auto h-90 rounded-md font-light text-sm lg:text-base"
        >
          <div class="w-10/12 h-full mt-3 lg:mt-0 py-4 lg:py-2 lg:px-2 rounded-lg mx-auto ml-14 px-4">
            <h4 class="font-bold">Contexto</h4>
            <p
              class="text-md lg:text-sm"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc, at vestibulum libero ultrices nisl. Libero, ullamcorper morbi sagittis et id turpis volutpat sit maecenas. Orci erat sed porta justo tempor tristique amet erat viverra. Mollis diam pharetra, sit adipiscing pharetra.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectViewer',
  props: {
    projectObj: {
      type: Object,
      default() {
        return {
          name: 'Project X',
          description: 'Just a large lorem, imagine this.',
          lovers: 200,
          details: {
            Virtualization: 'Docker',
            Backend: 'Django',
            Server: 'Uvicorn',
          },
          commits: {
            '000': 'Add(thisProject): Experimental Commit Feature.',
            '001': 'Add(thisProject): More than a fancy thing.',
            '002': 'Add(thisProject): More than a fancy thing.',
            '003': 'Add(thisProject): More than a fancy thing.',
          },
          demoUrl: 'www.myorg/iedemo',
          repoUrl: 'https://github.com/username/eirepo',
          images: [
            'https://picsum.photos/300/300',
            'https://picsum.photos/300/300',
            'https://picsum.photos/300/300',
            'https://picsum.photos/300/300',
            'https://picsum.photos/300/300',
            'https://picsum.photos/300/300',
          ],
        }
      },
      required: false,
    },
    inAdvancedMode: {
      type: Boolean,
      default: false,
    },
  }, data(){
    return {
      isViewerOpen:true
    }
  },
  computed: {
    tech() {
      return this.projectObj.details.values
    },
  },
}
</script>

<style scoped>
#overlay {
  z-index: 2;
}
.scrollable {
  max-height: 55%;
  min-height: 50%;
}
.viewer {
  max-height: 80%;
}
</style>
