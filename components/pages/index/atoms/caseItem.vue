<template>
  <div class="caseItem">
    <div class="wrapper">
      <div class="item_name">
        {{ caseItem.name }}
      </div>
      <div class="item_description">
        {{ caseItem.description }}
      </div>
      <div class="item_demo" :class="caseItem.is_demo ? '--available' : ''">
        Demo
      </div>
    </div>
    <div class="item_tech truncate">
      <ul class="tech_list">
        <li>{{ caseItem.stack }}</li>
        <li :key="index" v-for="(each, index) in caseItem.tech">
          {{ each }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseItem',
  props: {
    caseItem: {
      type: Object,
      default() {
        return {
          name: 'Portfolio Template',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi assumenda beatae corporis delectus dolores eius facere fugit laborum nostrum numquam officia officiis optio pariatur placeat repudiandae sunt ullam unde vel voluptates!',
          stack: 'JAMSTACK',
          tech: ['Vue.js', 'TailwindCss'],
          is_demo: true,
        }
      },
    },
  },
}
</script>

<style scoped></style>
