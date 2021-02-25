<template>
  <div v-bind:class="{ 'animate-pulse': !isDataLoaded}"
    class="group Showoff big-card flex flex-col bg-gray-300 justify-between w-64 h-64 rounded-lg mx-5 mb-10 hover:bg-gray-200"
  >
    <!--    <span-->
    <!--      class="text-gray-500 text-xl text-center -mt-6 opacity-0 group-hover:opacity-100"-->
    <!--    >-->
    <!--      Project Name-->
    <!--    </span>-->
    <!--    <div-->
    <!--      class="arrows flex flex-row justify-between self-center w-full px-5 opacity-0 group-hover:opacity-100"-->
    <!--    >-->
    <!--      <button class="rounded-full bg-gray-200">-->
    <!--        <svg-->
    <!--          class="fill-current opacity-75 h-4 w-4 origin-center transform rotate-180"-->
    <!--          xmlns="http://www.w3.org/2000/svg"-->
    <!--          viewBox="0 0 20 20"-->
    <!--        >-->
    <!--          <path-->
    <!--            d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"-->
    <!--          />-->
    <!--        </svg>-->
    <!--      </button>  Integrate values from Static projects in showcase to import values -->



    <VueSlickCarousel
      class="max-h-full max-w-full flex flex-col self-center justify-center"
      v-bind="slickOptions"
    >
      <div
        v-for="(x,i) in dataObject.media"
        :key="i"
        class="img-wrapper content-center h-64 w-full"
      >
        <img
          :src="require(`@/assets/projects/${x}`)"
          class="object-contain not-selectable m-auto h-64 w-full"
          alt=""
          :ondragstart="`return false`"
        />
      </div>
    </VueSlickCarousel>



    <!--      <button class="rounded-full bg-gray-200">-->
    <!--        <svg-->
    <!--          class="fill-current opacity-75 h-4 w-4"-->
    <!--          xmlns="http://www.w3.org/2000/svg"-->
    <!--          viewBox="0 0 20 20"-->
    <!--        >-->
    <!--          <path-->
    <!--            d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"-->
    <!--          />-->
    <!--        </svg>-->
    <!--      </button>-->
    <!--    </div>-->
    <!--    <div-->
    <!--      class="tags shade h-60 flex flex-row text-center opacity-0 group-hover:opacity-100"-->
    <!--    >-->
    <!--      <div-->
    <!--        class="p-2 items-end leading-none rounded-t-lg flex lg:inline-flex w-full justify-center"-->
    <!--      >-->
    <!--        <span-->
    <!--          class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-2 text-left"-->
    <!--          >TypeScript</span-->
    <!--        >-->
    <!--        <span-->
    <!--          class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-2 text-left"-->
    <!--          >TypeScript</span-->
    <!--        >-->
    <!--        <span-->
    <!--          class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-2 text-left"-->
    <!--          >TypeScript</span-->
    <!--        >-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
interface IDataObject{
  media:[]
}
@Component({
  components: {},
})
export default class CardCarousel extends Vue {
  @Prop({
    default() {
      return {media:[]} // Arr of 1 value.
    },
    required: true,
  })
  private dataObject!: IDataObject
  //Render variables
  // private media:string[]=this.dataObject.media

  slickOptions: Object = {
    slidesToShow: 1,
    arrows: true,
    // slidesToScroll: 1,
  }
  
  get isDataLoaded(){
  return this.dataObject.media?true:false
}
}

</script>

<style scoped>
.shadde:hover {
  background: linear-gradient(
    to top,
    rgb(250, 250, 250) 34%,
    rgba(255, 255, 255, 0) 84%
  );
}
.slick-list {
  max-width: 100%;
  max-height: 100%;
}
.not-selectable {
  /* user-drag: none; */
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.slick-arrow {
  background-color: #303030;
}
</style>
