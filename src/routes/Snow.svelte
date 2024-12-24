<script lang="ts">
  import { T } from '@threlte/core';
  import { useLoader } from '@threlte/core';
  import { TextureLoader } from 'three';
  import { onMount } from 'svelte';

  const { load } = useLoader(TextureLoader);
  let snowflakeTexture;

  const snowCount = 3000;
  let snowParticles = [];

  const createSnowParticles = () => {
    return Array.from({ length: snowCount }, () => ({
      position: [
        Math.random() * 0.6 - 0.3, // X: tilfeldig mellom -10 og 10
        Math.random() * 0.6 - 0.3, // Y: tilfeldig mellom -10 og 10
        Math.random() * 0.6 - 0.3  // Z: tilfeldig mellom -10 og 10
      ],
      scale: Math.random() * 0.003 // Tilfeldig mellom 0.005 og 0.04
    }));
  };

  onMount(async () => {
    snowflakeTexture = await load('/src/routes/snowflake.png');
    snowParticles = createSnowParticles();
  });
</script>

{#if snowflakeTexture}
  {#each snowParticles as particle (particle.position, particle.scale)}
    <T.Sprite position={particle.position} scale={[particle.scale, particle.scale, particle.scale]}>
      <T.SpriteMaterial map={snowflakeTexture} transparent={true} />
    </T.Sprite>
  {/each}
{/if}
