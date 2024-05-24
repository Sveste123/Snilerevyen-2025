<script lang="ts">
  import { T } from '@threlte/core'
  import { ContactShadows, Float, Grid, OrbitControls, Gizmo, TrackballControls } from '@threlte/extras'
  import * as Extra from '@threlte/extras'

  export let rotateSpeed: number
  export let zoomSpeed: number
  export let scale: number
  export let rotx: number
  export let roty: number
  export let rotz: number
  export let minPolarAngle: number
  export let maxPolarAngle: number
</script>

<T.PerspectiveCamera
  makeDefault
  poition=static
  position={[-10, 0, 10]}
  fov={5}
  enableZoom={1}
>

    <!-- autoRotate -->
  <OrbitControls
    enableZoom={false}
    enableDamping
    autoRotateSpeed={0.5}
    target={[0, 0, 0]}
    {rotateSpeed}
    {zoomSpeed}
    {minPolarAngle}
    {maxPolarAngle}
  />

  <!-- <TrackballControls
    {minPolarAngle}
    {maxPolarAngle}
    {rotateSpeed}
    {zoomSpeed}
    target.y={0}
  /> -->

</T.PerspectiveCamera>

<T.DirectionalLight
  intensity={4.8}
  position.x={-10}
  position.y={10}
/>
<T.AmbientLight intensity={2} />

<!-- <Grid
  position.y={-0.001}
  cellColor="#ffffff"
  sectionColor="#ffffff"
  sectionThickness={0}
  fadeDistance={25}
  cellSize={2}
/> -->

<ContactShadows
  scale={10}
  blur={2}
  far={2.5}
  opacity={0.5}
/>

<Float
  floatIntensity={10}
  floatingRange={[0, 0.01]}
>
  <!-- <T.Mesh
    position={[0, 0, 0]}
    rotation={[-5, 128, 10]}
    scale={0.7}
  >
    <T.SphereGeometry/>
    <T.MeshStandardMaterial color="#F8EBCE" />
  </T.Mesh> -->
</Float>

<!-- <Extra.GLTF
    url="./models/earth8k.glb"
    interactive
    position={[0, 0, 0]}
    rotation={[rotx, roty, rotz]}
    {scale}
    castShadow
    receiveShadow
/> -->

<Extra.GLTF
    url="./models/RomerikeMap2WrappedCylindrical.glb"
    interactive
    position={[0, 0, 0]}
    rotation={[rotx, roty, rotz]}
    {scale}
    castShadow
    receiveShadow
/>