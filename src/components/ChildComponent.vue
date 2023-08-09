<template>
  <button class="border-primary" @click="emitClickEvent">Update Staff</button>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue'
import { userPresenter } from '~/plugins/userInjection'
import { useNuxtApp } from 'nuxt/app'

export default defineComponent({
  setup(_, context: SetupContext) {
    const app = useNuxtApp()
    const { state, presenter } = app.$userPresenter as ReturnType<
      typeof userPresenter
    >
    const emitClickEvent = () => {
      presenter.updateRole(context.emit('update-role', 'master'))
    }
    return { emitClickEvent }
  },
})
</script>
