import DatePicker from 'vue-datepicker-next'
import 'vue-datepicker-next/index.css'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    console.log('client!!')
    nuxtApp.vueApp.component('DatePicker', DatePicker)
  }
})
