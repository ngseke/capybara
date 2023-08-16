<div>
  <slot />
</div>

<style lang="sass">
$size: 600vw

@keyframes slide
  0%
    background-position-x: 0%
  100%
    background-position-x: $size

div
  width: 100%
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  background-image: repeating-linear-gradient(-45deg, red 0%, yellow 7.14%, lime 14.28%, cyan 21.42%, cyan 28.56%, blue 35.7%, magenta 42.84%, red 50%)
  background-size: $size $size
  animation: slide 10s infinite linear forwards
</style>
