import { NuxtApp } from '#app'
import { UsesPresenter } from '~/core/presenter/users/usesPresenter'
import { UsersView } from '~/core/presenter/users/usesView'
import { UserInteractor } from '~/core/usecases/account'

export const userPresenter = (
  context: NuxtApp
): { presenter: UsesPresenter; state: Readonly<UsersView['state']> } => {
  const view = new UsersView(context)
  const ui = new UserInteractor()
  const presenter = new UsesPresenter(view, ui)
  return {
    presenter,
    state: view.state,
  }
}

interface UsersInjections {
  $userPresenter(): ReturnType<typeof userPresenter>
}

declare module '#app' {
  // @ts-ignore
  interface NuxtApp extends UsersInjections {}
}

export default (context: NuxtApp) => {
  console.log('plugins!!', context)
  return {
    provide: {
      userPresenter: userPresenter(context),
    },
  }
}
