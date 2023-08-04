<template>
  <div
    v-if="showDialog"
    :tabindex="tabindex ? 0 : null"
    class="z-max scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50 bg-black"
    :class="modalOverlayClasses"
    @click.self="handleClickCloseButton"
  >
    <div class="relative mx-auto z-50" :class="modalOuterClasses">
      <div class="animate-fade-in-up relative" :class="modalBodyClasses">
        <button
          v-if="showCloseButton"
          type="button"
          class="flex items-center justify-center absolute top-7 right-7 -m-3 h-8 w-8 transition duration-100 ease-in-out bg-white text-gray-600"
          :class="{ hidden: variant === 'screen' }"
          @click="handleClickCloseButton"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            class="fill-current h-5 w-5"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            ></path>
          </svg>
        </button>
        <div
          v-if="header || $slots.header"
          class="p-6 text-lg flex font-bold rounded-t"
        >
          <slot v-if="$slots.header" name="header" />
          <span v-else>{{ header }}</span>
        </div>
        <div class="px-6 pb-5 text-sm">
          <slot />
        </div>
        <div v-if="$slots.footer" class="p-6 rounded-b bg-white">
          <div class="flex justify-end">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted } from 'vue'
export enum VariantStates {
  Small = 'small',
  Narrow = 'narrow',
  Wide = 'wide',
  Large = 'large',
  Normal = 'normal',
  Screen = 'screen',
  Default = 'default',
}

export const VARIANT_STATE_CLASSES_MODAL_OVERLAY: {
  [key in VariantStates]: string
} = {
  [VariantStates.Small]: 'flex items-center',
  [VariantStates.Narrow]: 'overflow-auto',
  [VariantStates.Wide]: 'overflow-auto',
  [VariantStates.Normal]: 'overflow-auto',
  [VariantStates.Large]: 'overflow-auto',
  [VariantStates.Screen]: '',
  [VariantStates.Default]: 'overflow-auto',
}

export const VARIANT_STATE_CLASSES_MODAL_OUTER: {
  [key in VariantStates]: string
} = {
  [VariantStates.Small]: 'w-96 px-3 py-12',
  [VariantStates.Narrow]: 'max-w-sm px-3 py-12',
  [VariantStates.Wide]: 'max-w-3xl px-3 py-12',
  [VariantStates.Normal]: 'max-w-xl px-3 py-12',
  [VariantStates.Large]: 'max-w-6xl h-screen px-3 py-12',
  [VariantStates.Screen]: 'w-screen h-screen',
  [VariantStates.Default]: 'max-w-lg px-3 py-12',
}

export const VARIANT_STATE_CLASSES_MODAL_BODY: {
  [key in VariantStates]: string
} = {
  [VariantStates.Small]: 'rounded bg-white shadow',
  [VariantStates.Narrow]: 'rounded bg-white shadow',
  [VariantStates.Wide]: 'rounded bg-white shadow',
  [VariantStates.Normal]: 'rounded bg-white shadow',
  [VariantStates.Large]: 'h-full rounded bg-white shadow',
  [VariantStates.Screen]: 'h-full rounded-none bg-white',
  [VariantStates.Default]: 'rounded bg-white shadow',
}
export default defineComponent({
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: '',
    },
    variants: {
      type: Object,
      default: () => ({}),
    },
    hideCloseButton: {
      type: Boolean,
      default: false,
    },
    clickToClose: {
      type: Boolean,
      default: false,
    },
    escToClose: {
      type: Boolean,
      default: true,
    },
    tabindex: {
      type: Boolean,
      default: true,
    },
    header: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    onMounted(() => {
      if (props.escToClose) {
        window.addEventListener('keydown', handleKeyDown)
      }
    })

    onBeforeUnmount(() => {
      if (props.escToClose) {
        window.removeEventListener('keydown', handleKeyDown)
      }
    })

    const showDialog = computed(() => props.value)

    const modalOverlayClasses = computed(() => {
      return props.variant
        ? VARIANT_STATE_CLASSES_MODAL_OVERLAY[props.variant as VariantStates]
        : ''
    })

    const modalOuterClasses = computed(() => {
      return props.variant
        ? VARIANT_STATE_CLASSES_MODAL_OUTER[props.variant as VariantStates]
        : VARIANT_STATE_CLASSES_MODAL_OUTER[VariantStates.Default]
    })

    const modalBodyClasses = computed(() => {
      return props.variant
        ? VARIANT_STATE_CLASSES_MODAL_BODY[props.variant as VariantStates]
        : ''
    })

    const showCloseButton = computed(() => {
      return !props.hideCloseButton
    })

    const handleClickCloseButton = () => {
      context.emit('closed')
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClickCloseButton()
      }
    }

    return {
      modalOverlayClasses,
      modalOuterClasses,
      modalBodyClasses,
      showDialog,
      showCloseButton,
      handleClickCloseButton,
    }
  },
})
</script>
