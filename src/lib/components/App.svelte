<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
  import Settings from './Settings.svelte'
  // import Renderer  from './Renderer.svelte'

  let rotateSpeed: number = 0.8
  let zoomSpeed: number = 0.3
  let scale: number = -0.3
  let rotx: number = 2.9
  let roty: number = 0.2
  let rotz: number = 0.5

  // let rendererParameters = {
  //   antialias: true, // Enable antialiasing
  // };

  // // Pass the rendererParameters object to the Canvas component
  // let renderer = new WebGLRenderer(rendererParameters);


</script>

<Canvas>
  <!-- <Renderer /> -->
  <Scene 
  {rotateSpeed}
  {zoomSpeed}
  {scale}
  {rotx}
  {roty}
  {rotz}
  />
</Canvas>

<Settings
  bind:rotateSpeed
  bind:zoomSpeed
  bind:scale
  bind:rotx
  bind:roty
  bind:rotz
/>