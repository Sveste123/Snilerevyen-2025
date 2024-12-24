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
  import Snow from './Snow.svelte';

  /* SNOW-SCRIPT END */
</script>

<T.PerspectiveCamera
  makeDefault
  position={[0, 0, 0.4]}
  fov={55}
  enableZoom={true}
  >

  <OrbitControls
    enableZoom={false}
    enableDamping={true}
    enablePan={false}
    autoRotate={false}
    autoRotateSpeed={0.1}
    zoomSpeed={zoomSpeed}
    target={[0, 0, 0]}
  />
    <!-- maxPolarAngle={1.6}
    minPolarAngle={1.25} -->

    <!-- target={[selection[0], selection[1], selection[2]-0.0000001]} -->


</T.PerspectiveCamera>

<Environment 
  files='/EnvironmentalLights.hdr'
/>
<T.DirectionalLight intensity={2.6} 
  position={[1, 1, 1]}
/>

<ContactShadows
  scale={10}
  blur={20}
  far={1}
  opacity={1}
/>

<!-- <T.Mesh
  interactive
  position={[0, 0, 0]}
  scale={0.016}
>
  <Extra.GLTF 
    url="./models/Spark.glb" 
  />
</T.Mesh> -->

<Spark 
  interactive
/>

<!-- Bruker Sveltes await-block for å laste teksturen -->
<Snow/>

<T.Mesh position={[0, -0.06, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[20, 20, 1]}>
  <!-- White material for snowy ground -->
  <T.MeshBasicMaterial color="#FFFAFA" />
  <T.PlaneGeometry args={[0.02, 0.02]} />
</T.Mesh>

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