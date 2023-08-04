<template>
  <div>
    <p>{{ message }}</p>
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const message = ref('Hello, Nuxt3!')

const updateMessage = async () => {
  message.value = 'Updated!'

  // Wait for the DOM update
  await nextTick(() => {
    console.log('nextTick')
  })

  console.log('DOM has been updated')
}
</script>
