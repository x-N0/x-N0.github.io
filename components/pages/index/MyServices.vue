<template>
  <div class="Services w-full h-full min-h-screen md:min-h-auto bg-gray-100">
    <div class="mx-auto flex flex-col w-full pt-16">
      <h1
        class="line text-center text self-center align-middle inline-block lg:text-5xl text-4xl font-bold"
      >
        I Do
      </h1>
      <p
        class="text-xl text-center font-sans font-semibold text-gray-600 mb-10 mx-10"
      >
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
        omnis iste natur
      </p>
      <div
        class="mx-auto flex md:flex-row flex-col flex-wrap items-center justify-center w-full"
      >
        <card-short
          v-for="(card, index) in cards"
          :key="index"
          class="rounded-lg md:w-5/12 w-8/12 mb-5 mx-10 h-64"
          :card-obj="card"
          :class="card.color"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardShort from './atoms/CardShort.vue'
export default {
  name: 'MyServices',
  components: { CardShort },
  data() {
    return {
      cards: [
        {
          title: 'Web Development',
          description:
            'Experienced working with multiple web technologies including some of the latest web technologies, always trying to find the optimal way to develop Web Systems.',
          img_bg:
            'https://images.unsplash.com/photo-1590192746144-b92a837f8ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          color: 'bg-red-100',
        },
        {
          title: 'UI/UX Design',
          description:
            'I feel comfortable working with multiple technologies to develop.',
          img_bg:
            'https://images.unsplash.com/photo-1526657782461-9fe13402a841?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60s',
          color: 'bg-red-100',
        },
        {
          title: 'Desktop Development',
          description:
            'I feel comfortable working with multiple technologies to develop Desktop apps.',
          img_bg:
            'https://images.unsplash.com/photo-1590192746144-b92a837f8ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          color: 'bg-red-100',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
