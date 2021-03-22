import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { store } from '~/store'

interface ModalViewerState {
  isOpen: boolean
}

@Module({ dynamic: true, store, name: 'ModalViewer', namespaced: true })
class ModalViewer extends VuexModule implements ModalViewerState {
  // state
  _isOpen: boolean = false
  _currentProject: object = {}

  @Mutation
  setIsOpen(status: boolean) {
    this._isOpen = status
  }

  get isOpen() {
    return this._isOpen
  }

  // @Action({})
  // public fetchProjects() {
  //   this.SET_CURRENTPROJECT('hoge')
  // }
}

export default getModule(ModalViewer)
