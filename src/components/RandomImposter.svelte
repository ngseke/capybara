<script lang="ts">
  import { getRandomImposterImage } from '../modules/imposters'
  import Character from './Character.svelte'

  const image = getRandomImposterImage()
</script>

<Character image={image} />
