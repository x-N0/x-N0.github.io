import Vuex, { Store } from 'vuex'

interface RootState {}

export const store = new Vuex.Store<RootState>({
  actions: {
    nuxtServerInit(contextal, context) {
      const projectList = context.$content('projects').fetch()
      // await $content('projects')
      //   .fetch()
      //   .then((projectList: object[]) => {
      //     console.log(projectList)
      //     // this._projects = projectList
      //   })
    }
  },
  mutations: {}
})
const createStore = (): Store<RootState> => {
  return store
}
export default createStore
