<script lang="ts">
  import { Canvas } from '@threlte/core'
  import { Text } from '@threlte/extras'
  import Scene from './Scene.svelte'
  import Scene2 from './Scene2.svelte'
  import Settings from './Settings.svelte'
	import Page from '../../routes/+page.svelte';
  // import Renderer  from './Renderer.svelte'

  let rotateSpeed: number = -0.3  //  Trackball: 2.8  -  OB: 0.4
  let zoomSpeed: number = 0
  let scale: number = 0 // TB: 0.071  -  OB: 0.07
  let rotx: number = 0
  let roty: number = 0
  let rotz: number = 0
  let minPolarAngle: number = 0
  let maxPolarAngle: number = 0.1
  let camx: [number, number, number] = [0, 0, 4] // Initialize camx as an array
  let target: [number, number, number] = [0, 0, -7] // Calculate target based on camx with a slight offset in z
  let selection: [number, number, number] = [0, 0, 11]

  // let rendererParameters = {
  //   antialias: true, // Enable antialiasing
  // };

  // // Pass the rendererParameters object to the Canvas component
  // let renderer = new WebGLRenderer(rendererParameters);


</script>

<Canvas>
  <!-- <Renderer /> -->

  <Scene2
  />

  <Scene 
  {rotateSpeed}
  {zoomSpeed}
  {rotx}
  {roty}
  {rotz}
  {camx}
  {target}
  {selection}
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
  bind:camx
  bind:selection
/>