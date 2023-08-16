<script lang="ts">
  import Background from './components/Background.svelte'
  import RandomCapybara from './components/RandomCapybara.svelte'
  import Player from './components/Player.svelte'
  import RandomImposter from './components/RandomImposter.svelte'
  import { onDestroy, onMount } from 'svelte'

  const imposterProbability = 1 / 32
  const shouldShowImposter = Math.random() < imposterProbability

  let isPlaying = false
  const playBackgroundMusic = () => { isPlaying = true }

  onMount(() => {
    document.body.addEventListener('click', playBackgroundMusic)
  })
  onDestroy(() => {
    document.body.removeEventListener('click', playBackgroundMusic)
  })
</script>

<Background>
  <div class="stage">
    {#if shouldShowImposter}
      <RandomImposter/>
    {:else}
      <RandomCapybara active={isPlaying}/>
      <Player {isPlaying} />
    {/if}
  </div>
</Background>

<style lang="sass">
.stage
  position: relative
  width: 90%
  height: 100%
  @media (min-width: 576px)
    width: 100%
    height: 60vh
</style>
