<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import { Text3DGeometry, ContactShadows, Float, Grid, OrbitControls, Gizmo, TrackballControls, Mask, useMask, MeshLineGeometry, MeshLineMaterial } from '@threlte/extras'
  import * as Extra from '@threlte/extras'
	import { BoxGeometry, Group, MeshBasicMaterial } from 'three';
  import { writable } from 'svelte/store';
  // import * as Utils from 'three/src/math/MathUtils'
  import { Environment, interactivity, Text, useCursor } from '@threlte/extras'
	import Spark from './Spark.svelte';
  // import { DEG2RAD } from 'three/src/math/MathUtils'
  export let zoomSpeed: number
  // export let rotx: number
  // export let roty: number
  // export let rotz: number
  // export let camx: [number, number, number] // camx is an array
  // export let target: [number, number, number] // target is also an array
  // export let selection: [0, 0, 0]

  // let isPianoClicked = writable(false);

  // const handlePianoClick = () => {
  //   isPianoClicked.update((current) => !current);
  // };
  // export let minPolarAngle: number 
  // export let maxPolarAngle: number
  // $: color = '#717cff'
  interactivity();
  
  /* SNOW-SCRIPT START*/
  import Snosprut from './Snosprut.svelte';
  import Snow from './Snow.svelte';
	import Snohaug from './Snohaug.svelte';
	import Snohaug2 from './Snohaug2.svelte';
  import BackgroundCircles from './BackgroundCircles.svelte'

  /* SNOW-SCRIPT END */

  // Reactive store for media query
  const isSmallScreen = writable(false);

  // Update store based on screen size
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  const updateScreenSize = () => {
    isSmallScreen.set(mediaQuery.matches);
  };

  // Add listener
  mediaQuery.addEventListener('change', updateScreenSize);
  updateScreenSize(); // Initialize

  // Reactive camera properties
  $: cameraProps = $isSmallScreen
    ? { fov: 55, position: [0, 0.1, 0.4] } // Small screen
    : { fov: 55, position: [0, 0.1, 0.3] }; // Large screen
</script>

<T.PerspectiveCamera
  makeDefault
  fov={cameraProps.fov}
  position={cameraProps.position} 
  >

  <OrbitControls
    enableZoom={false}
    enableDamping={true}
    enablePan={false}
    autoRotate={false}
    autoRotateSpeed={0.1}
    zoomSpeed={zoomSpeed}
    target={[0, 0, 0]}
    maxPolarAngle={1.4}
    minPolarAngle={0}
  />
  
  <!-- {/* Mask as a child of the camera */} -->
  <!-- <T.Group position={[0, 0, -0.1]}>
    <Mask>
      <T.Mesh>
        <T.RingGeometry args={[0.05, 0.5, 60]} />
        <T.MeshBasicMaterial color="#707dff"/>
      </T.Mesh>
    </Mask>
  </T.Group> -->

  <BackgroundCircles
  />

  
</T.PerspectiveCamera>

<!-- <Environment 
  files='/EnvironmentalLights.hdr'
/> -->

<T.DirectionalLight 
  intensity={7} 
  position={[5, 4, 5]}
  castShadow
/>

<T.AmbientLight 
  intensity={1.66} 
  position={[0.5, 0.5, 0.5]}
  castShadow
/>

<ContactShadows
  scale={10}
  blur={1}
  far={0.5}
  opacity={0.5}
/>

<!-- <T.Mesh
  interactive
  position={[0, 0, 0]}
  scale={0.01}
>
  <Extra.GLTF 
    url="./models/Snohaug.glb" 
  />
</T.Mesh> -->

<!-- <T.Mesh position={[0, -0.15, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.004]}>
  <T.MeshBasicMaterial color="white" />
  <T.SphereGeometry args={[20, 20]} />
</T.Mesh> -->

<Snohaug
  interactive
  recieveShadow
/>



<Snohaug2
  interactive
  recieveShadow
/>

<!-- 
<Snohaug
  interactive
  position={[0, -0.06, 0]}
  scale={[0.2, 0.4, 0.2]}
/> -->

<Spark 
  interactive
  castShadow
/>

<!-- Bruker Sveltes await-block for å laste teksturen -->
<Snow/>

<Snosprut/>


<!-- <T.Mesh position={[0, -0.06, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[20, 20, 1]}>
  <T.MeshBasicMaterial color="#FFFAFA" />
  <T.PlaneGeometry args={[0.02, 0.02]} />
</T.Mesh> -->

<!-- <Snow4kplane
  position={[0, -0.06, 0]}
  scale={0.3}
/> -->

<!-- <Text
  text="1MKA"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[-3.5, -1.25, -3]}
  color=white
/> -->
<!-- <Text
  text="Program:
  "
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[-0.2, -1.25, -3]}
  color=white
/> -->
<!-- <Text
  text="1MDBC"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[3.1, -1.25, -3]}
  color=white
/> -->

<!-- <Text
  text="2IBA"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[-3.5, -1.25, -1]}
  color=white
/>
<Text
  text="2MKA"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[-0.2, -1.25, -1]}
  color=white
/>
<Text
  text="3MDBC"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[3.1, -1.25, -1]}
  color=white
/>

<Text
  text="3IBA"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[-3.5, -1.25, 1]}
  color=white
/>
<Text
  text="3MKA"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[-0.2, -1.25, 1]}
  color=white
/>
<Text
  text="1STA"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[3.1, -1.25, 1]}
  color=white
/>

<Text
  text="1STB"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[-3.5, -1.25, 3]}
  color=white
/>
<Text
  text="1STC"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[-0.2, -1.25, 3]}
  color=white
/>
<Text
  text="1STD"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[3.1, -1.25, 3]}
  color=white
/>

<Text
  text="1STE"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[-3.5, -1.25, 5]}
  color=white
/>
<Text
  text="1STF"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[-0.2, -1.25, 5]}
  color=white
/>
<Text
  text="1STG"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[3.1, -1.25, 5]}
  color=white
/>

<Text
  text="FOT/SFT"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[-3.5, -1.25, 7]}
  color=white
/>
<Text
  text="KOMBINASJONS-
  PROGRAMMET"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[-0.2, -1.25, 7]}
  color=white
/>
<Text
  text="1STH"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[3.1, -1.25, 7]}
  color=white
/> -->

<!-- if selection[0] > 0 or selection[0] < 0: -->
<!-- <T.Mesh>
  <Extra.GLTF
  url="./models/DoneAula.glb"
  interactive
  position={[0, -1.4, -7]}
  rotation={[rotx, roty, rotz]}
  scale={0.3}
  />
</T.Mesh> -->

<!-- <T.Mesh position={[-0.285, -1.3, -3.7]}>
  <T.BoxGeometry args={[11, 0.1, 0.1]} />
  <T.MeshBasicMaterial color=red />
</T.Mesh> -->

<!-- <T.Mesh position={[-2.85, 1.7, -5.7]}>
  <Text3DGeometry
    text="   Velkommen til
  Pop-up Konsert
        i Aulaen"
    bevelEnabled = {true}
    bevelOffset = {0}
    bevelSegments = {20}
    bevelSize = {0.03}
    bevelThickness = {0.07}
    curveSegments = {12}
    height = {0.005}
    size = {0.5}
    smooth = {0.1}
    />
  <T.MeshStandardMaterial
    color="#00FFFF"
    toneMapped={false}
    metalness={0.4}
    roughness={1.0}
  />
</T.Mesh> -->