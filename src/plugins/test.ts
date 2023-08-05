import { defineNuxtPlugin, useNuxtApp, useRoute } from '#app'
import { toRaw } from '#imports'

interface PluginsInjections {
  $myPlugin: MyPluginInterface
}

declare module '#app' {
  // @ts-ignore
  interface NuxtApp extends PluginsInjections {}
}

export interface MyPluginInterface {
  hoge(): string
}

class MyPlugin implements MyPluginInterface {
  hoge() {
    // この中では、Nuxtインスタンスやルートオブジェクトも取得可能
    console.log(useNuxtApp())
    console.log(useRoute().query)
    console.log(toRaw(useRoute().meta))
    console.log('ほげ')

    return 'hoge'
  }
}

export default defineNuxtPlugin(() => {
  const my = () => {
    return new MyPlugin()
  }

  return {
    provide: {
      myPlugin: my(),
    },
  }
})
