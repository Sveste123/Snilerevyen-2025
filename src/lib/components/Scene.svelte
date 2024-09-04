<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import { Text3DGeometry, ContactShadows, Float, Grid, OrbitControls, Gizmo, TrackballControls, Mask, useMask, MeshLineGeometry, MeshLineMaterial } from '@threlte/extras'
  import * as Extra from '@threlte/extras'
	import { BoxGeometry, Group, MeshBasicMaterial } from 'three';
  // import * as Utils from 'three/src/math/MathUtils'
  import { interactivity, Text, useCursor } from '@threlte/extras'
  // import { DEG2RAD } from 'three/src/math/MathUtils'
  export let rotateSpeed: number
  export let zoomSpeed: number
  export let rotx: number
  export let roty: number
  export let rotz: number
  export let camx: [number, number, number] // camx is an array
  export let target: [number, number, number] // target is also an array
  export let selection: [number, number, number]

  // export let minPolarAngle: number 
  // export let maxPolarAngle: number
  $: color = '#FE3D00'
</script>

<T.PerspectiveCamera
  makeDefault
  position={selection}
  fov={120}
  enableZoom={0}
  >

  <OrbitControls
    enableZoom={false}
    enableDamping={false}
    enablePan={false}
    autoRotateSpeed={0.5}
    target={[selection[0], selection[1], selection[2]-0.0000001]}
    rotateSpeed={rotateSpeed}
    zoomSpeed={zoomSpeed}
  />
    <!-- maxPolarAngle={1.6}
    minPolarAngle={1.25} -->

</T.PerspectiveCamera>

<T.AmbientLight intensity={3} 
  position={[5, 0, 5]}
/>
<T.DirectionalLight intensity={1} 
  position={[10, 10, 10]}
/>

<ContactShadows
  scale={1}
  blur={20}
  far={1}
  opacity={1}
/>

<Text
  text="1MKA"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[-3.5, -1.25, -3]}
  color=white
/>
<Text
  text="1MDA"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[-0.2, -1.25, -3]}
  color=white
/>
<Text
  text="1MDBC"
  interactive
  fontSize={0.45}
  anchorY="100%"
  anchorX="50%"
  rotation.x={-1.57}
  position={[3.1, -1.25, -3]}
  color=white
/>

<Text
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
/>

<!-- if selection[0] > 0 or selection[0] < 0: -->
<T.Mesh>
  <Extra.GLTF
  url="./models/DoneAula.glb"
  interactive
  position={[0, -1.4, -7]}
  rotation={[rotx, roty, rotz]}
  scale={0.3}
  />
</T.Mesh>

<T.Mesh position={[-0.285, -1.3, -3.7]}>
  <T.BoxGeometry args={[11, 0.1, 0.1]} />
  <T.MeshBasicMaterial color=red />
</T.Mesh>

<T.Mesh position={[-2.85, 1.7, -5.7]}>
  <Text3DGeometry
    text="Velkommen til
Oppstartskonsert"
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
</T.Mesh>