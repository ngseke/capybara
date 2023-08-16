<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import YouTubePlayer from 'youtube-player'

  let element: HTMLDivElement | undefined
  let player: ReturnType<typeof YouTubePlayer> | undefined

  const videoId = 'wIkmkI1NTME'

  export let isPlaying = false

  $: {
    if (isPlaying) {
      player?.playVideo()
    } else {
      player?.pauseVideo()
    }
  }

  onMount(() => {
    if (element != null) {
      player = YouTubePlayer(element, {
        height: 500,
        width: 500,
        videoId,
        playerVars: {
          loop: 1,
          disablekb: 1,
          playlist: videoId,
        },
      })
    }
  })

  onDestroy(async () => await player?.destroy())
</script>

<div class="wrapper">
  <div bind:this={element} tabindex="-1"/>
</div>

<style lang="sass">
.wrapper
  position: fixed
  top: -10000px
  left: -10000px
</style>
