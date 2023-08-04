<template>
  <div>
    <draggable
      v-model="list"
      group="people"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
    >
      <template #item="{ element }">
        <div>{{ element.name }}</div>
      </template>
    </draggable>
  </div>
</template>

<script lang="ts">
import { useNuxtApp, NuxtApp } from '#app'
import { defineComponent, ref } from 'vue'
import draggable from 'vuedraggable'

export default defineComponent({
  components: { draggable },
  setup(props, context) {
    const app: NuxtApp = useNuxtApp()
    const drag = ref(false)

    return {
      drag,
      list: [
        { name: 'John', id: 0 },
        { name: 'Joao', id: 1 },
        { name: 'Jean', id: 2 },
      ],
    }
  },
})
</script>
