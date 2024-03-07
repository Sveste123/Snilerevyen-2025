<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
  import Settings from './Settings.svelte'
  let rotateSpeed: number = 0.8
  let zoomSpeed: number = 0.3


</script>

<Canvas>
  <Scene 
  {rotateSpeed}
  {zoomSpeed}
  />
</Canvas>

<Settings
  bind:rotateSpeed
  bind:zoomSpeed

/>