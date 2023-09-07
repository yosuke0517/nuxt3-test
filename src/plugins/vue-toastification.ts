import { createToastInterface, POSITION, TYPE } from 'vue-toastification'
import { defineNuxtPlugin, NuxtApp } from '#app'
import SToaster from '~/components/molecules/SToaster.vue'
import 'vue-toastification/dist/index.css'

type parameterType = {
  title: string
  text: string
  buttonText: string
  clickEvent: Function
  type: TYPE
  isHTML?: boolean
}

const toast = (props: parameterType) => {
  Toastification.toast(props)
}

const toaster = {
  toast,
  success({
    text,
    title,
    buttonText,
    isHTML = false,
  }: {
    text: string
    title?: string
    buttonText?: string
    isHTML?: boolean
  }) {
    this.toast({
      text,
      title: title || '成功',
      buttonText: buttonText || '',
      clickEvent: () => {},
      type: TYPE.SUCCESS,
      isHTML,
    })
  },
  warning({
    text,
    title,
    buttonText,
    isHTML = false,
  }: {
    text: string
    title?: string
    buttonText?: string
    isHTML?: boolean
  }) {
    this.toast({
      title: title || '注意',
      text,
      buttonText: buttonText || '',
      clickEvent: () => {},
      type: TYPE.WARNING,
      isHTML,
    })
  },
  error({
    text,
    title,
    buttonText,
    isHTML = false,
    clickEvent = () => {},
  }: {
    text: string
    title?: string
    buttonText?: string
    isHTML?: boolean
    clickEvent?: Function
  }) {
    this.toast({
      title: title || 'エラー',
      text,
      buttonText: buttonText || '',
      clickEvent,
      type: TYPE.ERROR,
      isHTML,
    })
  },
}

interface VueToastification {
  $toast: typeof toast
  $toaster: typeof toaster
}

declare module '#app' {
  // @ts-ignore
  interface NuxtApp extends VueToastification {}
}

class Toastification {
  // eslint-disable-next-line no-use-before-define
  private static toastInterface: Toastification
  toast

  private constructor() {
    const pluginOptions = {
      maxToasts: 10,
      position: POSITION.BOTTOM_RIGHT,
      timeout: 5000,
      closeOnClick: false,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: true,
      hideProgressBar: false,
      icon: true,
      rtl: false,
    }
    this.toast = createToastInterface(pluginOptions)
  }

  static getInterface() {
    if (Toastification.toastInterface) return this.toastInterface
    Toastification.toastInterface = new Toastification()
    return Toastification.toastInterface
  }

  static toast = (props: parameterType) => {
    const toastInterface = Toastification.getInterface()
    const content = {
      component: SToaster,
      props: {
        title: props.title,
        text: props.text,
        buttonText: props.buttonText,
        clickEvent: props.clickEvent,
        isHTML: props.isHTML,
      },
    }
    toastInterface.toast(content, {
      type: props.type,
      closeButton: 'button',
    })
  }
}

// defineNuxtPluginを使ってNuxtプラグインとしてエクスポートします
// @ts-ignore
export default defineNuxtPlugin((nuxt: NuxtApp) => {
  // ここでプラグインの初期化や設定を行います
  Toastification.getInterface()
  nuxt.$toast = toast
  nuxt.$toaster = toaster
})

export { TYPE }
