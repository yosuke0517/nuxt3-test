import { NuxtApp } from '#app'
import { reactive } from 'vue'

type IForm = {
  email: string
  name: string
}

export type UsersViewState = {
  id: number
  form: {
    email: string
    name: string
  }
  role: string
}

export class UsersView {
  state: UsersViewState
  private root: NuxtApp

  constructor(root: NuxtApp) {
    this.root = root
    this.state = reactive({
      id: 0,
      form: {
        email: '',
        name: '',
      },
      role: '',
    })
  }

  setForm(form: IForm) {
    this.state.form = form
  }
  getForm() {
    return this.state.form
  }

  setRole(callback?: () => void) {
    if (callback) callback()
  }
}
