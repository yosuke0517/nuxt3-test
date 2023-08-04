import { IUserInteractor } from '~/core/usecases/interface/account'
import { UserModel } from '~/core/domain/model/account'

export class UserInteractor implements IUserInteractor {
  constructor() {}

  async updateUser(user: UserModel): Promise<UserModel> {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return user
    // 本当はrepoのupdateUserに相当するものを呼ぶ
  }
}
