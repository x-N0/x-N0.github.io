import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { IContentDocument } from '@nuxt/content/types/content'
import { store } from '~/store'

interface ModalViewerState {
  isOpen: boolean
}

@Module({ dynamic: true, store, name: 'ModalViewer', namespaced: true })
class ModalViewer extends VuexModule implements ModalViewerState {
  // state
  private _isOpen: boolean = false
  private _ProjectQueryBuilder: any

  private _currentProject: IContentDocument = {
    createdAt: new Date(),
    description: 'Default Description',
    dir: '/projects/null',
    extension: '.json',
    media: ['nullmedia', 'nullmedia'],
    name: 'This is a default project',
    path: '/projects/null',
    slug: 'NoSlug',
    updatedAt: new Date(),
    url: 'Default'
  }

  @Mutation
  setIsOpen(status: boolean) {
    this._isOpen = status
  }

  get isOpen() {
    return this._isOpen
  }

  get currentProject() {
    return this._currentProject
  }

  @Mutation
  getProjectQueryBuilder(ProjectQB: any) {
    this._ProjectQueryBuilder = ProjectQB
  }

  @Mutation
  async setCurrentProject(path: string) {
    const $content = this._ProjectQueryBuilder
    if ($content) {
      await $content(path)
        .fetch()
        .then((obj: IContentDocument | IContentDocument[]) => {
          if (!Array.isArray(obj)) {
            this._currentProject = obj
            console.log(this._currentProject)
          }
        })
        .catch((e: any) => console.log(e))
    }
  }
}

export default getModule(ModalViewer)
