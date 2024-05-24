<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import { ContactShadows, Float, Grid, OrbitControls, Gizmo, TrackballControls, Mask, useMask } from '@threlte/extras'
  import * as Extra from '@threlte/extras'

  let Stencil: any = useMask(0)

  export let rotateSpeed: number
  export let zoomSpeed: number
  export let scale: number
  export let rotx: number
  export let roty: number
  export let rotz: number
  export let minPolarAngle: number 
  export let maxPolarAngle: number
</script>

<T.Group
  makeDefault
  position={[0, 0, 0.469]}
  let:ref
>
  <Mask>
    <T.CircleGeometry args={[0.22]} />
    <T.MeshBasicMaterial />
  </Mask>
  <T.Mesh>
    <T.RingGeometry args={[0.22, 0.22, 56]} />
    <T.MeshBasicMaterial />
  </T.Mesh>
</T.Group>

<T.PerspectiveCamera
  makeDefault
  poition=static
  position={[0, 0, 14]}
  fov={5}
  enableZoom={1}
>

    <!-- autoRotate -->
  <OrbitControls
    enableZoom={false}
    enableDamping
    enablePan={false}
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


<!-- <T.DirectionalLight
  intensity={2.8}
  position={[-20, 10, 20]}
/> -->
<T.AmbientLight intensity={3  } />

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

<T.Mesh>
  <Extra.GLTF
  url="./models/RomerikeMap2WrappedCylindrical.glb"
  interactive
  position={[0, 0.02, 0]}
  rotation={[rotx, roty, rotz]}
  {scale}
  castShadow
  receiveShadow
  />
  <T.MeshStandardMaterial
    color="#000000"
    {...Stencil}
  />  
</T.Mesh>

<T.Mesh
    position={[0, 0, 0]}
    scale={0.6}
  >
    <T.CylinderGeometry args={[0.65, 0.65, 10, 100]}/>
    <T.MeshStandardMaterial
      color="#F8EBCE"
      {...Stencil}
    />
  </T.Mesh>