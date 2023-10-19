// import Kuroshiro from 'kuroshiro'
// import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji'

export const getKuroshiro = async () => {
  const Kuroshiro = (await import('kuroshiro')).default
  console.log(Kuroshiro)
  const KuromojiAnalyzer = (await import('kuroshiro-analyzer-kuromoji')).default

  const kuroshiroInstance = new Kuroshiro()
  console.log(kuroshiroInstance)
  await kuroshiroInstance.init(new KuromojiAnalyzer())

  const result = await kuroshiroInstance.convert('かたかな', { to: 'katakana' })
  console.log(result) // This should print "かたかな"

  return result
}
