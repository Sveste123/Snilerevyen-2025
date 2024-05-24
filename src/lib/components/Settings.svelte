<script lang="ts">
    // import { Checkbox, Pane, ThemeUtils, Slider } from 'tweakpane';
    import {Checkbox, Slider, Pane, ThemeUtils} from 'svelte-tweakpane-ui';

    export let rotateSpeed: number
    export let zoomSpeed: number
    export let scale: number
    export let rotx: number
    export let roty: number
    export let rotz: number
    export let minPolarAngle: number
    export let maxPolarAngle: number

  </script>
  
  <Pane
    theme={ThemeUtils.presets.light}
    position="fixed"
    title="OrbitControls"
  >
    <!-- <Checkbox
      bind:value={autoRotate}
      label="autoRotate"
    /> -->
    <!-- <Checkbox
      bind:value={enableDamping}
      label="enableDamping"
    /> -->
    <!-- <Checkbox
      bind:value={enableZoom}
      label="enableZoom"
    /> -->
    <!-- <Checkbox
      bind:value={zoomToCursor}
      label="zoomToCursor"
    /> -->
    <Slider
      label="rotateSpeed"
      bind:value={rotateSpeed}
      min={0}
      max={5}
      step={0.1}
    />
    <Slider
      label="zoomSpeed"
      bind:value={zoomSpeed}
      min={0}
      max={2}
      step={0.1}
    />
    <Slider
      label="Scale"
      bind:value={scale}
      min={-1}
      max={1}
      step={0.01}
    />    
    <Slider
      label="Rotation X"
      bind:value={rotx}
      min={-10}
      max={10}
      step={0.1}
    />
    <Slider
      label="Rotation Y"
      bind:value={roty}
      min={-10}
      max={10}
      step={0.1}
    />
    <Slider
      label="Rotation Z"
      bind:value={rotz}
      min={-10}
      max={10}
      step={0.1}
    />
    <Slider
      label="minPolarAngle"
      bind:value={minPolarAngle}
      min={0}
      max={Math.PI}
      step={0.1}
    />
    <Slider
      label="maxPolarAngle"
      bind:value={maxPolarAngle}
      min={0}
      max={Math.PI}
      step={0.1}
    />
  </Pane>
  