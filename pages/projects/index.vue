<template>
  <div>{{ projects }}</div>
</template>
<script lang="ts">
import { Vue } from 'nuxt-property-decorator'

export default Vue.extend({
  async asyncData({ $content, params }: any) {
    const projectsData = await $content('projects', params.slug)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      projects: projectsData
    }
  }
})
</script>
