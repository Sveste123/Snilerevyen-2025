<script>
  import { T, Canvas } from '@threlte/core';
  import { TextureLoader } from 'three';
  import { onMount } from 'svelte';

  let snowflakeTexture;
  let snowParticles = [];
  const snowCount = 500; // Antall snøfnugg

  const createSnowParticles = () => {
    const particles = [];
    for (let i = 0; i < snowCount; i++) {
      particles.push({
        position: {
          x: Math.random() * 20 - 10, // Spre snøfnugg horisontalt
          y: Math.random() * 20, // Startposisjon i høyden
          z: Math.random() * 20 - 10 // Spre snøfnugg i dybden
        },
        speed: Math.random() * 0.1 + 0.02, // Hastighet på hvert snøfnugg
      });
    }
    return particles;
  };

  const updateSnowParticles = () => {
    snowParticles.forEach(particle => {
      particle.position.y -= particle.speed;
      if (particle.position.y < 0) {
        particle.position.y = 20; // Reset høyden når snøfnugget når bakken
        particle.position.x = Math.random() * 20 - 10; // Reset horisontal posisjon
        particle.position.z = Math.random() * 20 - 10; // Reset dybde
      }
    });
  };

  onMount(() => {
    snowflakeTexture = new TextureLoader().load('/src/routes/snowflake.png');
    snowParticles = createSnowParticles();

    const animate = () => {
      updateSnowParticles();
      requestAnimationFrame(animate);
    };
    animate();
  });
</script>

<body>
  <Canvas T.PerspectiveCamera={{ position: [0, 10, 30] }}>
  {#each snowParticles as particle}
    <sprite position={particle.position}>
      <spriteMaterial args={{ map: snowflakeTexture, transparent: true }} />
    </sprite>
  {/each}
</Canvas>
</body>


<style>
  /* .canvas {
    width: 100%;
    height: 100%;
  } */
</style>
