<script lang="ts">
  export let image: string
  export let active = false
</script>

<div
  class="character"
  style:--background="url({image})"
>
  {#if active}
    <div class="active"/>
  {/if}
</div>

<style lang="sass">
@keyframes blink
  to
    transform: scale(1.3)
    opacity: 0

.character
  position: relative
  width: 100%
  height: 100%
  &::before, &::after, .active
    content: ''
    display: block
    width: 100%
    height: 100%
    background: center / contain no-repeat var(--background)
  &::before
    position: relative
    z-index: 1
  &::after, .active
    position: absolute
    top: 0
    left: 0
    filter: blur(1rem)
  .active
    filter: blur(1.2rem)
    animation: blink 1s infinite
</style>
