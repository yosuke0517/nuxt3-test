<template>
  <div>
    <!--    <p>{{ date }}</p>-->
    <!--    <button @click="increment">increment</button>-->
    <!--    <p>{{ counter }}</p>-->
  </div>
</template>

<script lang="ts">
import { useNuxtApp } from 'nuxt/app'
import { defineComponent } from 'vue'
import { useAsyncData } from '#imports'
import { useRequestHeaders } from '#app'

export default defineComponent({
  setup(_, context) {
    useAsyncData('key', async () => {
      if (process.server) {
        console.log('useAsyncData!!', process.env)
        const headers = useRequestHeaders(['cookie'])
        console.log('cookie!!', headers)
      }
      // your async data fetch logic here
      return {}
    })
    console.log('test2: setup!!', context)
    const hoge = useNuxtApp()
    console.log(hoge.$myPlugin2.fuga())
    // const { $store, $my } = useNuxtApp()
    //
    // const date = dayjs('2023-01-01')
    // // const counter = computed(() => $store.state.counter)
    //
    // const increment = () => {
    //   $store.increment()
    //   console.log($my.hoge())
    // }

    return {
      // date,
      // counter,
      // increment,
    }
  },
})
</script>
