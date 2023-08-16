export const capybaraImages = Object.values(
  import.meta.glob('../assets/img/capybara/*.png', { eager: true, as: 'url' })
)

export function getRandomCapybaraImage () {
  const index = Math.floor(Math.random() * capybaraImages.length)
  return capybaraImages[index]
}
