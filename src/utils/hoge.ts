import { useRoute } from '#app'

export const hoge = () => {
  const route = useRoute()
  console.log('route', route.path)
}
