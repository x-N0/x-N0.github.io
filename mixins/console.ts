import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component
export default class consoleMixin extends Vue {
    get console(){return console};

}