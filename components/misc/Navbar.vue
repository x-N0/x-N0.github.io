<template>
  <nav
    class="flex items-center justify-between flex-wrap shadow-md bg-gray-100 opacity-50 p-6 pl-32 pr-12"
  >
    <div class="flex items-center flex-shrink-0 mr-6">
      <svg
        class="fill-current h-8 w-8 mr-2"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
        />
      </svg>
      <!--      <span class="font-semibold text-xl tracking-tight">M</span>-->
    </div>
    <div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <nuxt-link
            to="#Header"
            class="block mt-4 lg:inline-block lg:mt-0 transparent hover:text-yellow-400 dark-hover:text-yellow-400 mr-4"
          >
            Home
          </nuxt-link>
          <nuxt-link
            class="block mt-4 lg:inline-block lg:mt-0 transparent hover:text-yellow-400 dark-hover:text-yellow-400 mr-4"
            to="#Contact"
          >
            Contact
          </nuxt-link>
          <nuxt-link
            class="block mt-4 lg:inline-block lg:mt-0 transparent hover:text-yellow-400 dark-hover:text-yellow-400 mr-4"
            to="#Contact"
          >
            Blog
          </nuxt-link>
        </div>
        <div class="items-center">
          <nuxt-link class="btn btn-yellow" to="#C"> Hire Me</nuxt-link>
        </div>
        <select-color-mode class="ml-12"/>
      </div>
    </div>
    <div class="lg:hidden">
      <button
        type="button"
        class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        @click="isOpen = !isOpen"
      >
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path
            v-if="isOpen"
            fill-rule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
          />
          <path
            v-if="!isOpen"
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
      </button>
    </div>
    <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4">
      <a
        href="#"
        class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
        >List your property</a
      >
      <a
        href="#"
        class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
        >Trips</a
      >
      <a
        href="#"
        class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
        >Messages</a
      >
      <select-color-mode class="center-self"/>
    </div>
  </nav>
</template>

<script>
import SelectColorMode from './SelectColorMode'
export default {
  name: 'Navbar',
  components: { SelectColorMode },
  data() {
    return {
      isOpen: false,
    }
  },
  // mounted() {
  //   $(document).ready(function () {
  //     var window = $(window);
  //     var view = "";
  //
  //     if (window.scrollTop == $("#one").offset().top)
  //     {view = "1";}
  //     else if (window.scrollTop == $("#two").offset().top)
  //     {view = "2";}
  //     else if (window.scrollTop == $("#three").offset().top)
  //     {view = "3";}
  //     else if (window.scrollTop == $("#four").offset().top)
  //     {view = "4";}
  //     else if (window.scrollTop == $("#five").offset().top)
  //     {view = "5";}
  //   });
  // }
}
</script>

<style scoped>
.icon-bar {
  background-color: brown;
  width: 100%;
}
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-yellow {
  @apply bg-transparent mt-4 mr-4 border border-blue-400;
}
.btn-yellow:hover {
  @apply border-transparent text-white bg-blue-400;
}
</style>
