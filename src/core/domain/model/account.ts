export type TUser = {
  email: string
  name: string
  id: number
}

export class UserModel {
  id: number
  email: string
  name: string

  constructor(params: TUser) {
    this.id = params.id
    this.email = params.email
    this.name = params.name
  }
}
