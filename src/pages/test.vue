<script lang="ts" setup>
import dayjs from 'dayjs'
import { ref, useFetch } from '#imports'
import { useNuxtApp } from '#app'
import { NuxtApp, useRuntimeConfig } from '#app'

const date = dayjs('2023-01-01')

const data = ref(null)

const app: NuxtApp = useNuxtApp()

useFetch(async () => {
  console.log('env', useRuntimeConfig().public.HOGE)
  const res = await fetch('http://localhost:3000/api/hello')
  data.value = await res.json()
})

console.log('data', data)
const increment = () => {
  app.$store.increment()
  console.log(app.$myPlugin.hoge())
}

const getCounter = () => {
  return app.$store.getCounter
}
</script>

<template>
  <div>
    <p>{{ date }}</p>
    <button @click="increment">increment</button>
    <p>{{ $store.counter }}</p>
    <p>{{ data }}</p>
    <p>getCounter: {{ $store.getCounter }}</p>
    <p>getCounter2: {{ $store.getCounter2 }}</p>
  </div>
</template>
