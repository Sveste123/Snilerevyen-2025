<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
  import Scene2 from './Scene2.svelte'
  import Settings from './Settings.svelte'
  // import Renderer  from './Renderer.svelte'

  let rotateSpeed: number = 0.4
  let zoomSpeed: number = 0.2
  let scale: number = 0.087
  let rotx: number = 0
  let roty: number = 0
  let rotz: number = 0
  let minPolarAngle: number = 1.5
  let maxPolarAngle: number = 1.4


  // let rendererParameters = {
  //   antialias: true, // Enable antialiasing
  // };

  // // Pass the rendererParameters object to the Canvas component
  // let renderer = new WebGLRenderer(rendererParameters);


</script>

<Canvas>
  <!-- <Renderer /> -->

  <!-- <Scene2
  /> -->

  <Scene 
  {rotateSpeed}
  {zoomSpeed}
  {scale}
  {rotx}
  {roty}
  {rotz}
  {minPolarAngle}
  {maxPolarAngle}
  />
</Canvas>

<!-- <Canvas>
  <Scene2
  />
</Canvas> -->

<Settings
  bind:rotateSpeed
  bind:zoomSpeed
  bind:scale
  bind:rotx
  bind:roty
  bind:rotz
  bind:minPolarAngle
  bind:maxPolarAngle
/>