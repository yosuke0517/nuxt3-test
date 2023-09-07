<template>
  <div class="container flex justify-between max-w-xs">
    <div class="pl-1 pt-1 pb-2">
      <div class="text-black font-bold">
        {{ title }}
      </div>
      <div v-if="!isHTML" class="text-sm mt-1 text-gray-800">
        {{ text }}
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-else class="text-sm mt-1 text-gray-800" v-html="text" />
    </div>
    <!-- ボタンアクションがある場合はCloseボタンを隠す。アクションがない場合は表示される -->
    <div
      v-if="buttonText"
      class="flex bg-white -mr-11 ml-6 border-l place-content-center w-24 z-50"
    >
      <div
        class="flex h-full items-center text-primary text-sm cursor-pointer"
        @click="onClickButton"
      >
        {{ buttonText }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: '',
    },
    clickEvent: {
      type: Function as unknown as () => () => void,
      default: () => {},
    },
    isHTML: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const onClickButton = () => {
      props.clickEvent()
    }
    return {
      onClickButton,
    }
  },
})
</script>

<style>
.Vue-Toastification__container {
  z-index: 2147483647 !important;
}

.Vue-Toastification__container .Vue-Toastification__toast {
  background-color: white;
  padding-top: 15px;
  padding-bottom: 15px;
}

.Vue-Toastification__container .Vue-Toastification__toast--default svg {
  color: black;
}

.Vue-Toastification__container .Vue-Toastification__toast--success svg {
  color: green;
}

.Vue-Toastification__container .Vue-Toastification__toast--info svg {
  color: skyblue;
}

.Vue-Toastification__container .Vue-Toastification__toast--warning svg {
  color: orange;
}

.Vue-Toastification__container .Vue-Toastification__toast--error svg {
  color: red;
}

.Vue-Toastification__container
  .Vue-Toastification__toast
  .Vue-Toastification__close-button {
  color: gray;
}

.Vue-Toastification__container
  .Vue-Toastification__toast
  .Vue-Toastification__progress-bar {
  background-color: #ccc;
  height: 3px;
}
</style>
