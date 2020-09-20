<template>
  <div class="bg-gray-200 rounded-lg w-full">
    <div class="md:container mx-auto">
      <div
        class="aboutMe w-full items-center py-1/12 px-20 flex md:flex-row flex-col"
      >
        <!-- .title.mr-auto>img.object-cover.w-full+span.text-3xl.self-end^.info>span{} -->
        <div class="title_wrap flex flex-col justify-center md:mr-auto w-1/3">
          <img
            src="http://droitthemes.com/wp/mak/wp-content/uploads/2018/10/about_shap_bg.png"
            class="title_bg relative object-cover"
            alt
          />
          <h1
            class="title_about line text absolute self-center align-middle inline-block lg:text-6xl text-5xl font-bold"
          >
            About Me
          </h1>
        </div>
        <div
          class="flex flex-col w-full lg:mt-0 mt-3 ml-auto font-thin text-xl"
        >
          <p class="about_txt md:px-4">
            Soy un desarrollador y creador de productos que ostento
            orgullosamente mi trabajo, que está basado en la calidad y eficacia
            del software en los productos que desarrollo, cada día estoy
            dedicado a mejorar los procesos de desarrollo, la agilidad de la
            producción y el pragmatismo del software.
          </p>
          <div
            class="about_btn flex flex-row self-center justify-around items-center w-full md:w-2/3 mt-10"
          >
            <div class="container mx-auto justify-around flex flex-row">
              <button
                class="about_works__btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 md:px-6 border border-blue-500 hover:border-transparent rounded"
              >
                View Works
              </button>
              <a
                class="about_resume__btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 md:px-6 border border-blue-500 hover:border-transparent rounded"
                href="#Ref"
                >View Resume</a
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
  top: -3rem;
}
</style>
