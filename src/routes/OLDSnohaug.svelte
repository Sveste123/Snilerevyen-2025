<script lang="ts">
  import state from '/src/routes/universalState.json' 
  import type * as THREE from 'three'
  import { Group } from 'three'
  import { T, type Props, type Events, type Slots, forwardEventHandlers } from '@threlte/core'
  import { useGltf } from '@threlte/extras'
  import { Theatre, SheetObject, Sequence } from '@threlte/theatre'

  type $$Props = Props<THREE.Group>
  type $$Events = Events<THREE.Group>
  type $$Slots = Slots<THREE.Group> & { fallback: {}; error: { error: any } }

  export const ref = new Group()

  type GLTFResult = {
    nodes: {
      SnowBall001: THREE.Mesh
    }
    materials: {
      Snow: THREE.MeshStandardMaterial
    }
  }

  const gltf = useGltf<GLTFResult>('/models/Snohaug.glb')

  const component = forwardEventHandlers()
</script>

<Theatre config={{ state: state }}>
  <Sequence autoplay>
    <SheetObject key="Snøhaug" props={{ scale: 0, opacity: 0, rotationx: 0, rotationy: 0, rotationz: 0, positionx: 0, positiony: 0, positionz: 0, }} let:values>
      <T is={ref} dispose={false} {...$$restProps}  
        rotation.x={values.rotationx} 
        rotation.y={values.rotationy} 
        rotation.z={values.rotationz} 
        position.x={values.positionx} 
        position.y={values.positiony} 
        position.z={values.positionz} 
        scale={values.scale} 
        bind:this={$component}
      >
        {#await gltf}
          <slot name="fallback" />
        {:then gltf}
          <T.Group>
            <T.Mesh 
              geometry={gltf.nodes.SnowBall001.geometry} 
              material={gltf.materials.Snow} 
            />
          </T.Group>
        {:catch error}
          <slot name="error" {error} />
        {/await}
    
        <slot {ref} />
      </T>
    </SheetObject>
  </Sequence>
</Theatre>
