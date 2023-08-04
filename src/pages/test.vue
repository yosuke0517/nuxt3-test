<script lang="ts" setup>
import dayjs from 'dayjs'
import { ref, useFetch } from '#imports'
import { useNuxtApp } from 'nuxt/app'

const date = dayjs('2023-01-01')

const data = ref(null)

useFetch(async () => {
  console.log('useFetch in process', process)
  const res = await fetch('/api/hello')
  data.value = await res.json()
})

const { $store, $myPlugin } = useNuxtApp()

console.log('data', data)
const increment = () => {
  $store.increment()
  console.log($myPlugin.hoge())
}

const getCounter = () => {
  return $store.getCounter()
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
