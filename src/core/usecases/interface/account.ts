import { UserModel } from '~/core/domain/model/account'

export interface IUserInteractor {
  updateUser(user: UserModel): Promise<UserModel>
}
