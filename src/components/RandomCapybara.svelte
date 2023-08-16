<script lang="ts">
  import { getRandomCapybaraImage } from '../modules/capybaras'
  import Character from './Character.svelte'

  export let active = false

  const image = getRandomCapybaraImage()
</script>

<Character image={image} {active} />
