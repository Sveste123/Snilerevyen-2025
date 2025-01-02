<script lang="ts">
  import { Canvas } from '@threlte/core'
  import { onMount } from 'svelte';
  import Scene from '../../routes/Scene.svelte'
  // import Renderer  from './Renderer.svelte'

  import { Loading } from '/Users/root/source/Snilerevyen 2025/src/routes/loadingStore';

  import { onDestroy } from 'svelte';

  let isLoading = true;

  // Abonner på Loading fra store
  const unsubscribe = Loading.subscribe((value) => {
    isLoading = value;
    console.log(value);
  });

  onDestroy(() => {
    unsubscribe(); // Rydd opp når komponenten blir ødelagt
  });
</script>

{#if isLoading = false}
<div class="loading-screen">Laster inn scenen...</div>
{/if}

<Canvas>
  <Scene/>
</Canvas>