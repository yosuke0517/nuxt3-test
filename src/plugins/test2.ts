import { NuxtApp, useNuxtApp, useRoute, useRouter } from '#app'

interface PluginsInjections {
  $myPlugin2: MyPluginInterface
}

declare module '#app' {
  // @ts-ignore
  interface NuxtApp extends PluginsInjections {}
}

export interface MyPluginInterface {
  fuga(): string
  context: NuxtApp
}

class MyPlugin2 implements MyPluginInterface {
  context: NuxtApp
  constructor(context: NuxtApp) {
    this.context = context
  }
  fuga() {
    // この中では、Nuxtインスタンスやルートオブジェクトも取得可能
    // console.log(useNuxtApp())
    // console.log('userRouter', useRouter())
    // console.log('userRoute', useRoute())
    console.log('ふが')

    return 'fuga'
  }
}

export default (nuxtApp: NuxtApp) => {
  // console.log('引数のNuxtApp', nuxtApp)
  // const hoge = useNuxtApp()
  // console.log('useNuxtApp()', hoge)
  const my = () => {
    return new MyPlugin2(nuxtApp)
  }

  return {
    provide: {
      myPlugin2: my(),
    },
  }
}
