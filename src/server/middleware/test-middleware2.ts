export default async function serverInitMiddleware(context: NuxtApp) {
  console.log('test-middleware2', context)
  if (process.server) return
}
