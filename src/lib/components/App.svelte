<script lang="ts">
  import { Canvas } from '@threlte/core'
  import { onMount } from 'svelte';
  import Scene from '../../routes/Scene.svelte'
  // import Renderer  from './Renderer.svelte'

  let isLoading = true; // Tilstand for å spore lasting
  // Når scenen er ferdig lastet
  function handleSceneLoaded() {
    isLoading = false;
  }

</script>

<Canvas>
    {#if !isLoading}
      <div class="loading-screen">Laster inn scenen...</div>
    {/if}
  <Scene on:loaded={handleSceneLoaded} />
</Canvas>

<style>
  .loading-screen {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    color: white;
  }
</style>