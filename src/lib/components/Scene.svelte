<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import { ContactShadows, Float, Grid, OrbitControls, Gizmo, TrackballControls, Mask, useMask } from '@threlte/extras'
  import * as Extra from '@threlte/extras'
	import { Group } from 'three';

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

<T.PerspectiveCamera
  makeDefault
  position={[0, 0, 14]}
  fov={5}
  enableZoom={1}
>
  <OrbitControls
    enableZoom={false}
    enableDamping={true}
    enablePan={false}
    autoRotateSpeed={0.5}
    target={[0, -0.06, 0]}
    rotateSpeed={rotateSpeed}
    zoomSpeed={zoomSpeed}
    minPolarAngle={minPolarAngle}
    maxPolarAngle={maxPolarAngle}
  />

  <!-- {/* Mask as a child of the camera */} -->
  <T.Group position={[0, 0, -13.431]}>
    <Mask>
      <T.CircleGeometry args={[0.22]} />
      <T.MeshBasicMaterial />
    </Mask>
    <T.Mesh>
      <T.RingGeometry args={[0.219, 0.22, 56]} />
      <T.MeshBasicMaterial />
    </T.Mesh>
  </T.Group>
</T.PerspectiveCamera>




<!-- <T.DirectionalLight
  intensity={2.8}
  position={[-20, 10, 20]}
/> -->
<T.AmbientLight intensity={3} />

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

<!-- <Float
  floatIntensity={10}
  floatingRange={[0, 0.01]}
>
  <T.Mesh
    position={[0, 0, 0]}
    rotation={[-5, 128, 10]}
    scale={0.7}
  >
    <T.SphereGeometry/>
    <T.MeshStandardMaterial color="#F8EBCE" />
  </T.Mesh>
</Float> -->

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
  position={[0, 0, 0]}
  rotation={[rotx, roty, rotz]}
  {scale}
  castShadow
  receiveShadow
  />
</T.Mesh>

<T.Mesh
    position={[0, 0, 0]}
    scale={0.6}
  >
    <T.CylinderGeometry args={[0.65, 0.65, 10, 100]}/>
    <T.MeshStandardMaterial
      color="black"
      {...Stencil}
    />
</T.Mesh>