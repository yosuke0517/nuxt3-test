import { createApp, h } from 'vue'
import ConfirmModal from '~/components/ConfirmModal.vue'

export const showConfirmDialog = (
  message: string,
  okButtonText: string = 'OK'
): Promise<boolean> => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  return new Promise((resolve) => {
    const app = createApp({
      render() {
        // @ts-ignore
        return h(ConfirmModal, {
          message,
          okButtonText,
          isVisible: true,
          // キャンセルイベントが発生したらappをアンマウントし、Promiseをfalseで解決する
          onCanceled: () => {
            app.unmount()
            document.body.removeChild(div)
            resolve(false)
          },
          // OKイベントが発生したらappをアンマウントし、Promiseをtrueで解決する
          onOk: () => {
            app.unmount()
            document.body.removeChild(div)
            resolve(true)
          },
        })
      },
    })

    app.mount(div)
  })
}
