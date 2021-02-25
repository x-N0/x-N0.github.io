<template>
  <section class="flex flex-col h-full items-center justify-center bg-black">
    <img
      :alt="bg.alt"
      class="img object-cover inline-block object-center self-center w-full opacity-50"
      :src="bg.img"
    />
    <div
      class="flex absolute flex-col text-gray-200 self-center mx-auto mt-1/5"
    >
      <div class="text my-10 justify-center self-center items-center w-3/4">
        <h1 class="font-bold text-3xl lg:text-4xl text-center">
          Trusted Worldwide
        </h1>
        <p class="text-center font-sans text-xl lg:text-3xl">
          Trusted techno solutions by companies all over the world and one on
          his way to
          <span class="text-red-300">Mars</span>.
        </p>
      </div>
      <div
        class="worldwide flex flex-wrap items-stretch justify-center self-center max-w-6xl group"
      >
        <button class="w-1/3 opacity-50 hover:opacity-100 focus:opacity-100">
          <img
            class="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/kickstarter.svg"
            style="max-height: 60px"
          />
        </button>
        <button class="w-1/3 opacity-50 hover:opacity-100 focus:opacity-100">
          <img
            class="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/slack.svg"
            style="max-height: 60px"
          />
        </button>
        <button class="w-1/3 opacity-50 hover:opacity-100 focus:opacity-100">
          <img
            class="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/glossier.svg"
            style="max-height: 60px"
          />
        </button>
        <button class="w-1/3 opacity-50 hover:opacity-100 focus:opacity-100">
          <img
            class="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/charity_water.svg"
            style="max-height: 60px"
          />
        </button>
        <button class="w-1/3 opacity-50 hover:opacity-100 focus:opacity-100">
          <img
            class="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/missguided.svg"
            style="max-height: 60px"
          />
        </button>
        <button
          class="addNew w-1/3 opacity-50 hover:opacity-100 items-center focus:outline-none"
          @click="
            'mailto:robinsonchaplain@gmail.com'

          "
        >
          <img
            class="toFullOpacity w-1/2 mx-auto rounded-lg border border-blue-300 border-opacity-0 bg-gradient-to-t from-orange-400 via-red-500 to-pink-500 group-hover:border-opacity-75"
            src="\svg\PlusIcon.svg"
            style="max-height: 60px"
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TrustedBy',
  data() {
    return {
      bg: {
        alt: 'World Wide Ligthts Background',
        img:
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
      },
    }
  },
}
</script>
<style>
.img {
  height: 50vh;
}
.addNew {
  width: 0;
  transition: width 0.25s;
}
.worldwide:hover > .addNew {
  max-height: 15rem;
  width: 33.333333%;
}
</style>
