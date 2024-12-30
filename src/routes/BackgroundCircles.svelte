<script lang="ts">
  import state from '/src/routes/universalState.json' 
  import { T } from '@threlte/core';
  import type * as THREE from 'three'
  import { useLoader } from '@threlte/core';
  import { type Props, type Events, type Slots, forwardEventHandlers } from '@threlte/core'
  import { Group, TextureLoader } from 'three';
  import { onMount } from 'svelte';
  import { Theatre, SheetObject, Sequence } from '@threlte/theatre'

  const { load } = useLoader(TextureLoader);
  let snowflakeTexture;

  const snowCount = 22;
  let snowParticles = [];

  type $$Props = Props<THREE.Group>
  type $$Events = Events<THREE.Group>
  type $$Slots = Slots<THREE.Group> & { fallback: {}; error: { error: any } }

  export const ref = new Group()

  const component = forwardEventHandlers()

  /* Snøfnugg */
  const createSnowParticles = () => {
    return Array.from({ length: snowCount }, () => ({
      position: [
        Math.random() * 12 - 4, // X: tilfeldig mellom -10 og 10        
        Math.random() * - 0.2,  // Z: tilfeldig mellom -10 og 10
        Math.random() * - 10 - 5, // Y: tilfeldig mellom -10 og 10
      ],
      scale: Math.random() * 2 + 0.5 // Tilfeldig mellom 0.005 og 0.04
    }));
  };

  onMount(async () => {
    snowflakeTexture = await load('/BackgroundCircles.png');
    snowParticles = createSnowParticles();
  });
</script>

<Theatre config={{ state: state }} studio={{ hide: true }}>
  <Sequence autoplay>
    <SheetObject key="DLB" props={{ scale: 0, opacity: 0, rotationx: 0, rotationy: 0, rotationz: 0, positionx: 0, positiony: 5.4, positionz: 0, }} let:values>
      <T is={ref} dispose={false} {...$$restProps}  
        rotation.x={values.rotationx} 
        rotation.y={values.rotationy} 
        rotation.z={values.rotationz} 
        position.x={values.positionx} 
        position.y={values.positiony} 
        position.z={values.positionz} 
        bind:this={$component}
      >

      {#if snowflakeTexture}
        {#each snowParticles as particle (particle.position, particle.scale)}
          <T.Sprite position={particle.position} scale={[particle.scale * values.scale, particle.scale * values.scale, particle.scale * values.scale]}>
            <T.SpriteMaterial map={snowflakeTexture} transparent={true} lights={false} />
          </T.Sprite>
        {/each}
      {/if}

      <slot {ref} />
      </T>
    </SheetObject>
  </Sequence>
</Theatre>