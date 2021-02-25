<template>
  <div class="pizzabox bg-gray-200 rounded-lg px-5 py-2 mr-2">
    <span class="text-lg font-hairline">{{ 'BitcartCc-Sdk' }}</span>
    <div class="tags flex flex-row justify-center">
      <span
        class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold text-left"
        >T.S.</span
      >
      <span
        class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold text-left"
        >T.S.</span
      >
    </div>
  </div>
</template>

<script>
import { Vue } from 'nuxt-property-decorator'
export default Vue.extend({
  name: 'CardPizzaBox',
})
</script>

<style></style>
