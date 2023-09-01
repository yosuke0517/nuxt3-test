<template>
  <div class="invoices-detail">invoices detail: {{ id }}</div>
</template>

<script lang="ts">
import { useRoute, useRouter } from '#app'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const route = useRoute()
    return {
      id: route.params.id,
    }
  },
})
</script>
