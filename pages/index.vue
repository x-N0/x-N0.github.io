<template>
  <div>
    <IndexHeader />
    <about-me />
    <TrustedBy />
    <show-case :projects-array="this.$data.projectsArray" />
    <TimelineMidStraight />
    <!--    <my-services></my-services>-->
    <!--    <contact-me></contact-me>-->
  </div>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator'
import IndexHeader from '~/components/pages/index/IndexHeader.vue'
import AboutMe from '~/components/pages/index/AboutMe.vue'
import ShowCase from '~/components/pages/index/ShowCase.vue'
// import ContactMe from '~/components/pages/index/contactMe.vue'
// import MyServices from '~/components/pages/index/myServices.vue'
import TrustedBy from '~/components/pages/index/TrustedBy.vue'
import TimelineMidStraight from '~/components/pages/index/TimelineMidStraight.vue'
import ModalViewerState from '~/store/modules/ModalViewer'

export default Vue.extend({
  components: {
    TimelineMidStraight,
    TrustedBy,
    // MyServices,
    // ContactMe,
    ShowCase,
    AboutMe,
    IndexHeader
  },
  async asyncData({ $content, params }: any) {
    const projectsData = await $content('projects', params.slug)
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      projectsArray: projectsData
    }
  },
  mounted() {
    ModalViewerState.getProjectQueryBuilder(this.$content)
  }

})
</script>

<style lang="css">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
