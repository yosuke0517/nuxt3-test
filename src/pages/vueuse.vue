<template>
  <div>
    <div>
      <div class="inline-block mr-4">
        Filter list by size
        <input
          v-model="search"
          placeholder="e.g. small, medium, large"
          type="search"
          class="w-full border"
        />
      </div>
    </div>
    <div
      v-bind="containerProps"
      class="h-300px overflow-auto p-2 bg-gray-500/5 rounded"
    >
      <div v-bind="wrapperProps">
        <div
          v-for="{ index, data } in list"
          :key="index"
          class="border border-$c-divider mb-2"
          :style="{
            height: `${data.height}px`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }"
        >
          Row {{ index }} <span opacity="70" m="l-1">({{ data.size }})</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useVirtualList, useMagicKeys } from '@vueuse/core'
import { defineComponent, computed, ref, watch } from 'vue'

export default defineComponent({
  setup(props, context) {
    const search = ref('')
    const allItems = Array.from(Array(9999).keys()).map((i) => ({
      height: i % 2 === 0 ? 42 : 84,
      size: i % 2 === 0 ? 'small' : 'large',
    }))

    const filteredItems = computed(() => {
      return allItems.filter((i) =>
        i.size.startsWith(search.value.toLowerCase())
      )
    })

    const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
      filteredItems,
      {
        itemHeight: (i) => filteredItems.value[i].height + 8,
        overscan: 10,
      }
    )

    const { Ctrl_A_B, shift_ctrl_right } = useMagicKeys()

    watch(Ctrl_A_B, (v) => {
      if (v) console.log('Control+A+B have been pressed')
    })
    watch(shift_ctrl_right, (v) => {
      if (v) console.log('shift_ctrl_right have been pressed')
    })
    return {
      list,
      containerProps,
      wrapperProps,
      scrollTo,
      search,
    }
  },
})
</script>
