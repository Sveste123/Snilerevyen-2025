<script lang="ts">
  import { T } from '@threlte/core'
  import { ContactShadows, Float, Grid, OrbitControls, Gizmo, TrackballControls } from '@threlte/extras'
  import * as Extra from '@threlte/extras'

  export let rotateSpeed: number
  export let zoomSpeed: number
</script>

<T.PerspectiveCamera
  makeDefault
  position={[-10, 10, 10]}
  fov={6}
>
  <!-- <OrbitControls
    autoRotate
    enableZoom={false}
    enableDamping
    autoRotateSpeed={0.5}
    target.y={1.8}
  /> -->

  <TrackballControls
    {rotateSpeed}
    {zoomSpeed}
    target.y={0}
  />

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

<Extra.GLTF
    url="./models/earth8k.glb"
    interactive
    position={[0, 0, 0]}
    scale={0.3}
    castShadow
    receiveShadow
/>