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
    export let camx: [number, number, number] // Definerer camx som en array med tre tall
    // export let selection: [number, number, number]
    import { List, type ListOptions } from 'svelte-tweakpane-ui';

    const options: ListOptions<[number, number, number]> = {
      "1MKA": [-3.5, 0, -3],
      "1MDA": [-0.2, 0, -3],
      "1MDBC": [3.1, 0, -3],

      "2IBA": [-3.5, 0, -1],
      "2MKA": [-0.2, 0, -1],
      "3MDBC": [3.1, 0, -1],

      "3IBA": [-3.5, 0, 1],
      "3MKA": [-0.2, 0, 1],
      "1STA": [3.1, 0, 1],

      "1STB": [-3.5, 0, 3],
      "1STC": [-0.2, 0, 3],
      "1STD": [3.1, 0, 3],

      "1STE": [-3.5, 0, 5],
      "1STF": [-0.2, 0, 5],
      "1STG": [3.1, 0, 5],

      "FOT/SFT": [-3.5, 0, 7],
      "KOMBINASJONSPROGRAMMET": [-0.2, 0, 7],
      "1STH": [3.1, 0, 7],
      // "2STC": [3, 0, 3],
      // "2STD": [3, 0, 3],
      // "2STE": [3, 0, 3],
      // "2STF": [3, 0, 3],
      // "3STA": [3, 0, 3],
      // "3STB": [3, 0, 3],
      // "3STC": [3, 0, 3],
      // "3STD": [3, 0, 3],
    };
    // const options = ["1MDA", "2MDA", "3MDA"]
    export let selection: [number, number, number] = [0, 0, 4];

  </script>
  
  <Pane
    theme={ThemeUtils.presets.light}
    position="fixed"
    title="Din klasse"
  >
    <!-- <Slider
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
    /> -->
    <!-- <Slider
      label="camx[0]"
      bind:value={camx[0]}
      min={-10}
      max={10}
      step={0.1}
    />
    <Slider
      label="camx[1]"
      bind:value={camx[1]}
      min={-10}
      max={10}
      step={0.1}
    />
    <Slider
      label="camx[2]"
      bind:value={camx[2]}
      min={-10}
      max={10}
      step={0.1}
    /> -->
    <List 
      bind:value={selection} 
      label="Velg klasse:"
      {options}
    />
    <!-- <List 
      bind:value={concert} 
      label="Velg konsert:"
      {options2}
    /> -->
  </Pane>
  