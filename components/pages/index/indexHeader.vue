<template>
  <header
    class="flex flex-col-reverse md:flex-row justify-center md:justify-around w-full h-screen"
  >
    <div
      class="header_text justify-end self-center text-center font-bold md:w-8/12 w-full"
    >
      <h3 class="header_title font-light text-black md:text-6xl text-5xl">
        Robinson
      </h3>
      <h4 class="header-occupation font-hairline tracking-widest text-2xl">
        Fullstack Developer
      </h4>
      <button
        class="py-2 px-10 bg-blue-400 mt-4 mr-4 border border-blue-400 font-bold rounded"
      >
        Hire me
      </button>
    </div>
    <div
      class="header-img self-center md:pb-24 md:w-8/12 md:mx-16 h-full -mt-full md:mt-auto"
    >
      <img
        src="https://images.unsplash.com/photo-1555534650-6bb24b6fc0e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=1350&q=80"
        class="md:object-cover object-cover w-full h-full"
        alt="none"
      />
    </div>
  </header>
</template>
<script>
export default {
  name: 'IndexHeader',
}
</script>
