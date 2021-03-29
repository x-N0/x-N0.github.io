<template>
  <section class="workdetails flex flex-col items-center text-center py-10">
    <h1 class="p-2 bg-blue-500 rounded-full">Job Interests</h1>
    <div class="w-1 bg-gray-600 h-2"/>
    <ul
      class="flex flex-row justify-center rounded-lg bg-gray-50 p-10 flex-wrap w-6/12 bg-black bg-opacity-25"
    >
      <li
        v-for="(position, i) in sortedPositionsByLen"
        :key="i"
        class="rounded-full p-5 bg-cool-gray-400 shadow-inner"
      >
        {{ position }}
      </li>
    </ul>
    <div class="suggestion flex flex-col my-5">
      <h2>Any position in mind?</h2>
      <h3 class="">
        Let's
        <a
          class="border-b-2 leading-none border-gray-600 border-dashed hover:text-gray-300"
          href=""
          >talk</a
        >
        about it.
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JobInterests',
  data() {
    return {
      Positions: [
        'Fullstack Web Development',
        'Senior Software Developer',
        'JAMSTACK Developer',
      ], // TODO:Use split to divide the Position in 3, and make an inverted pyramid sorting by string len.
    }
  },
  computed: {
    sortedPositionsByLen() {
      return this.$data.Positions.sort((a, b) => {
        return a.length + b.length
      })
    },
  },
}
</script>

<style></style>
