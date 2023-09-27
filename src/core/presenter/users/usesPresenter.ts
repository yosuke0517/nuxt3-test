import { UsersView } from '~/core/presenter/users/usesView'
import { IUserInteractor } from '~/core/usecases/interface/account'
import { useI18n } from 'vue-i18n'
import { errorMessages } from '~/helper/errorMessages'
import { NuxtApp } from '#app'

export class UsesPresenter {
  private view: UsersView
  private userInteractor: IUserInteractor
  private context: NuxtApp

  constructor(
    view: UsersView,
    userInteractor: IUserInteractor,
    context: NuxtApp
  ) {
    console.log('constructor!!')
    this.view = view
    this.userInteractor = userInteractor
    this.context = context
  }

  async updateStaff(ctx: any) {
    console.log('ENV', process.env.HOGE)
    // const currentUser = await this.authRepo.getAuth(ctx)
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    this.view.state.role = 'update!'
    this.context.$toaster.success({ text: 'success update!!' })
  }

  updateRole(callback?: void) {
    if (callback) callback
  }

  getRole() {
    return 'hogehoge'
  }

  getError() {
    return errorMessages.required
  }
}
