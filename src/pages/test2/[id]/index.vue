<template>
  <div>
    <h1 class="font-bold">Test2 Detail Page</h1>
    <p>Id: {{ id }}</p>
    <button
      class="inline bg-gray-100 border-gray-200 p-4"
      v-tooltip="{
        content: `承認依頼者: 俺 <br/> 改行`,
        html: true,
      }"
      ref="hogeButtonRef"
      @click="hoge"
    >
      hoge
    </button>
    <p>{{ role2 }}: {{ role }}</p>
    <p>{{ errorMessages.unexpected }}</p>
    <p>{{ error }}</p>
    <SModal :value="isModalOpen" variant="large" @closed="closeModal">
      <template #header>確認</template>
    </SModal>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useNuxtApp, useRoute } from '#app'
import { userPresenter } from '~/plugins/userInjection'
import { errorMessages } from '~/helper/errorMessages'
import { showConfirmDialog } from '~/utils/dialog'
import SModal from '~/components/SModal.vue'
import ConfirmModal from '~/components/ConfirmModal.vue'

export default defineComponent({
  components: { ConfirmModal, SModal },
  setup(_, context) {
    const route = useRoute()
    const isModalOpen = ref(false)
    const id = ref(route.params.id)
    const app = useNuxtApp()
    const hogeButtonRef = ref<HTMLButtonElement>()

    const openDialog = () => {
      showConfirmDialog('hoge', 'fuga')
    }

    // コンポーネントがマウントされた後にIDを更新します（たとえば、ルートが変更されたときなど）
    onMounted(() => {
      id.value = route.params.id
    })

    const hoge = () => {
      // isModalOpen.value = true
      showConfirmDialog('hoge', 'OK')
    }

    const { state, presenter } = app.$userPresenter as ReturnType<
      typeof userPresenter
    >

    const closeModal = () => {
      console.log('close modal')
      isModalOpen.value = false
    }

    const role2 = presenter.getRole()
    const error = presenter.getError()

    const items = ref(['Item 1', 'Item 2', 'Item 3'])

    return {
      id,
      role: state.role,
      hoge,
      closeModal,
      hogeButtonRef,
      role2,
      errorMessages,
      error,
      isModalOpen,
      openDialog,
      items,
    }
  },
})
</script>
