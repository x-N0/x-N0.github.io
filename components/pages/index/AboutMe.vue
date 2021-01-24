<template>
  <div class="bg-gray-200 rounded-lg w-full py-10">
    <div class="md:container mx-auto">
      <div
        class="aboutMe w-full items-center py-1/12 px-20 flex md:flex-row flex-col"
      >
        <!-- .title.mr-auto>img.object-cover.w-full+span.text-3xl.self-end^.info>span{} -->
        <div class="title_wrap flex flex-col justify-center md:mr-10 w-1/3">
          <img
            src="#"
            class="title_bg relative object-cover"
            alt
          />
          <h1
            class="title_about line text-center text absolute self-center align-middle inline-block lg:text-5xl text-4xl font-bold"
          >
            About Me
          </h1>
        </div>
        <div
          class="flex flex-col w-full justify-center text-center items-center lg:mt-10 mt-3 ml-2 font-thin text-xl"
        >
          <p class="about_txt md:px-4">
            Soy un desarrollador y creador de productos que ostento
            orgullosamente mi trabajo, que está basado en la calidad y eficacia
            del software en los productos que desarrollo, cada día estoy
            dedicado a mejorar los procesos de desarrollo, la agilidad de la
            producción y el pragmatismo del software.
          </p>
          <div
            class="about_btn flex flex-row items-center w-full md:w-2/3 mt-10"
          >
            <div
              class="mx-auto justify-between flex flex-row md:text-xl text-md"
            >
              <button
                class="about_works__btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-5 md:px-6 border border-blue-500 hover:border-transparent rounded"
              >
                Works
              </button>
              <a
                class="about_resume__btn bg-transparent hover:bg-blue-500 ml-20 text-blue-700 font-semibold hover:text-white py-2 px-5 md:px-6 border border-blue-500 hover:border-transparent rounded"
                href="#Ref"
                >Resume</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
}
</script>

<style>
.line::after {
  position: relative;
  display: inline-block;
  content: '';
  width: 50%;
  height: 4px;
  background: #feb633;
  transition: all 0.3s;
  top: -0.8em;
}
</style>
