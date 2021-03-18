import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import ProjectViewerStore from './projectViewerStore'

export function getProjectViewer(store: Store<any>): ProjectViewerStore {
  return getModule(ProjectViewerStore, store)
}
