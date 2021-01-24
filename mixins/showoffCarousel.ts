import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component
export default class showoffCarouselData extends Vue {
  // carouselDatas: Array<string> = require.context('@/assets/', true, /data.js$/)
  public required: any
  // webpackAssetsGetPaths(regex: RegExp): __WebpackModuleApi.RequireContext {
  //   return require.context('@/assets/', true, regex)
  // }
  // webpackAssets = require.context('@/assets/', true, /data.js$/)
  // webpackAssets: __WebpackModuleApi.RequireContext = this.webpackAssetsGetPaths(
  //   /data.js$/
  // )
  // get carouselAssetsDataPaths(): string[] {
  //   return this.webpackAssetsGetPaths(/data.js$/)
  // }
  //
  // get carouselAssetsImgPaths(): string[] {
  //   return this.webpackAssetsGetPaths(/\.(png|jpg|jpeg|svg|)$/i)
  // }
  // dataArr=()=>{
  //   for(let i=0, i<this.carouselDatas.length)
  // }

  // get printFromshowoff(): string[] {
  //   return require.context('@/assets/', true, /data.js$/).keys()
  // }
}
