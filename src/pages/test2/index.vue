<template>
  <div>
    <input type="text" v-model="form.form.name" placeholder="Name" />
    <input type="text" v-model="form.form.email" placeholder="Email" />
    <p>name: {{ form.form.name }}</p>
    <p>email: {{ form.form.email }}</p>
    <p>role: {{ form.role }}</p>
    <ChildComponent @update-role="updateStaff('update!')" />
    <button class="btn-primary">プライマリボタン</button>
    <button class="btn-secondary">セカンダリボタン</button>
    <NuxtChild />
  </div>
</template>

<script lang="ts">
import { useNuxtApp } from 'nuxt/app'
import { defineComponent, onMounted, reactive } from 'vue'
import { useAsyncData } from '#imports'
import { NuxtApp, useRequestHeaders } from '#app'
import { userPresenter } from '~/plugins/userInjection'
import ChildComponent from '~/components/ChildComponent.vue'

export default defineComponent({
  components: { ChildComponent },
  setup(props, context) {
    const app: NuxtApp = useNuxtApp()
    console.log('test2 in process', process.env.HOGE)
    useAsyncData('key', async () => {
      if (process.server) {
        // console.log('useAsyncData!!', process.env)
        const headers = useRequestHeaders(['cookie'])
        // console.log('cookie!!', headers)
      }
      // your async data fetch logic here
      return {}
    })
    // console.log('test2: setup!!', context)
    // console.log('test2: setup: props', props)
    // console.log('app:', app.$userPresenter(app))
    // const hoge = useNuxtApp()
    // console.log(hoge.$myPlugin2.fuga())

    // const { presenter, state } = app.$userPresenter(context)

    const { $store, $myPlugin, $userPresenter } = useNuxtApp() as NuxtApp

    const increment = () => {
      $store.increment()
      // console.log('myPlugin, hoge()', $myPlugin.hoge())
    }
    increment()
    const { state, presenter } = $userPresenter() as ReturnType<
      typeof userPresenter
    >
    // console.log('$userPresenter: state', state)
    // console.log('$userPresenter: presenter', presenter)

    //
    // const date = dayjs('2023-01-01')
    // // const counter = computed(() => $store.state.counter)
    //
    // const increment = () => {
    //   $store.increment()
    //   console.log($my.hoge())
    // }
    // console.log('vueApp', app.vueApp)
    const updateStaff = (hoge: string) => {
      presenter.updateStaff(hoge)
    }

    const form = state

    return {
      // date,
      // counter,
      // increment,
      form,
      updateStaff,
    }
  },
})
</script>
<style lang="scss" scoped>
@import '~/assets/variables.scss';
</style>
