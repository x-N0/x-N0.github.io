export enum showOffTypes {
  FullStack,
  Coding,
  Design,
  Unknown,
}
export interface ICarouselData {
  dirname: string
  name: string
  // folderFilesCsv: Array<string>
  creationDate: Date
  visible: boolean
  githubRepo: string | null
  videoLinks: Array<string>
  type: showOffTypes
}

export default class carouselData implements ICarouselData {
  creationDate: Date
  // folderFilesCsv: Array<string>
  githubRepo: string | null = null
  name: string
  dirname: string = __dirname
  type: showOffTypes
  videoLinks: Array<string> = []
  visible: boolean
  constructor(type: showOffTypes, visible: boolean = false) {
    this.creationDate = new Date(2020, 11, 20) // constant, change to arbitrary.
    // this.creationDate = require('fs').stats(
    //   __filename,
    //   (err: Error, stats: any) => {
    //     if (err) throw err
    //     return stats.birthtime
    //   }
    // )
    // this.folderFilesCsv = require('fs').readdirSync(__dirname) use dirname with webpack to achieve this.
    this.name = require('path').basename(__dirname).split('_').join(' ')
    this.type = type
    this.visible = visible
    return this
  }

  public addVideoLinks(videoLinks: Array<string>) {
    this.videoLinks.concat(videoLinks)
    return this
  }

  public addGithubRepo(githubRepo: string) {
    this.githubRepo = githubRepo
    return this
  }
}
