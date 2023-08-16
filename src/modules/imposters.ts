export const imposterImages = Object.values(
  import.meta.glob('../assets/img/imposter/*.png', { eager: true, as: 'url' })
)

export function getRandomImposterImage () {
  const index = Math.floor(Math.random() * imposterImages.length)
  return imposterImages[index]
}
