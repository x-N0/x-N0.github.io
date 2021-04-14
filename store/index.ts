import Vuex, { Store } from 'vuex'

interface RootState {}

export const store = new Vuex.Store<RootState>({
  actions: {}
})
const createStore = (): Store<RootState> => {
  return store
}
export default createStore
