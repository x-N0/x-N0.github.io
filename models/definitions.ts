import { IContentDocument } from '@nuxt/content/types/content'

export interface IProjectDocument extends IContentDocument {
  name?: string
  description?: string
  media?: string[]
  url?: string
}
