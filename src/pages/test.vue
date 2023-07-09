<script lang="ts" setup>
import dayjs from 'dayjs'
import { useNuxtApp } from '#app'

const date = dayjs('2023-01-01')

const increment = () => {
  const { $store } = useNuxtApp()
  $store.increment()
}
</script>

<template>
  <div>
    <p>{{ date }}</p>
    <button @click="increment">increment</button>
    <p>{{ $store.counter }}</p>
  </div>
</template>
