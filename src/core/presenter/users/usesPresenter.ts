import { UsersView } from '~/core/presenter/users/usesView'
import { IUserInteractor } from '~/core/usecases/interface/account'
import { useI18n } from 'vue-i18n'
import { errorMessages } from '~/helper/errorMessages'

export class UsesPresenter {
  private view: UsersView
  private userInteractor: IUserInteractor

  constructor(view: UsersView, userInteractor: IUserInteractor) {
    console.log('constructor!!')
    this.view = view
    this.userInteractor = userInteractor
  }

  async updateStaff(ctx: any) {
    // const currentUser = await this.authRepo.getAuth(ctx)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(ctx)
  }

  updateRole(callback?: () => void) {
    if (callback) callback()
  }

  getRole() {
    const { t } = useI18n()
    return t('role')
  }

  getError() {
    return errorMessages.required
  }
}
