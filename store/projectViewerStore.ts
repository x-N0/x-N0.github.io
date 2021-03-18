import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'project',
  stateFactory: true,
  namespaced: true,
})
export default class ProjectViewerStore extends VuexModule {
  currentProject: object = {}
  isOpen: boolean = false

  // Project
  @Mutation
  nextCurrentProject(nextProject: object): void {
    this.currentProject = nextProject
  }

  get getCurrentProject() {
    return this.currentProject
  }

  // Extra + Status
  @Mutation
  isChangeOpen(status: boolean): void {
    this.isOpen = status
  }

  get getIsOpen() {
    return this.isOpen
  }
}
