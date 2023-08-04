<template>
  <SModal variant="small" :value="isVisible" :hide-close-button="true">
    <template #header>確認</template>
    {{ message }}
    <template #footer>
      <div class="flex justify-end gap-x-2">
        <button @click="onClickCancel">キャンセル</button>
        <button @click="onClickOk">{{ okButtonText }}</button>
      </div>
    </template>
  </SModal>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
import SModal from '~/components/SModal.vue'

export default defineComponent({
  components: {
    SModal,
  },
  props: {
    message: {
      type: String,
      required: true,
    },
    okButtonText: {
      type: String,
      default: 'OK',
    },
  },
  setup(props, context) {
    const isVisible = ref<boolean>(false)

    const methods = {
      onClickCancel() {
        context.emit('canceled')
      },
      onClickOk() {
        context.emit('ok')
      },
    }

    onMounted(() => {
      isVisible.value = true
    })

    return { isVisible, ...methods }
  },
})
</script>
