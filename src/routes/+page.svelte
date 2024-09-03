<script lang="ts">
  import App from "../lib/components/App.svelte"
  import { List, type ListOptions } from 'svelte-tweakpane-ui';
</script>

<!-- <a href="./about">about</a> -->


<!-- <div class="combobox">
  <div class="centered-container">
    <pre>
      <List 
        bind:value={selection} 
        label="Velg din klasse ->" 
        {options} 
        />
      Din valgte klasse: {selection}
    </pre>
  </div>
</div> -->

<div class="app">
  <App />

</div>

<!-- <iframe 
  style="border-radius:12px" 
  src="https://open.spotify.com/embed/track/2R9XyIjviqEsb93rZkdDVu?utm_source=generator" 
  width="100%" height="352" frameBorder="0" allowfullscreen="" 
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
  loading="lazy">
</iframe> -->

<style>
  :global(body) {
    margin: 0;
  }

  /* a {
    width: 100vw;
    height: 100vh;
    background: rgb(7, 19, 42);
    background: radial-gradient(180deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%);
    text-decoration: none;
    color: rgb(0, 0, 0);
    font-style: oblique;
  } */

  .centered-container {
    background-color: #ffffff; /* Hvit bakgrunn */
    padding: 0px; /* Gi litt luft rundt innholdet */
    box-sizing: border-box; /* Inkluderer padding og border i bredden */
    text-align: center; /* Sentrer tekst */
    width: fit-content; /* Sett bredden til å passe innholdet */
    max-width: 100%; /* For å sikre responsivitet */
  }

  .combobox {
    display: flex;
    justify-content: center; /* Sentrer horisontalt */
    align-items: center; /* Sentrer innholdet vertikalt */
    width: fit-content; /* Tar opp hele bredden av foreldreelementet */
    margin: 0 auto; /* Sentrer combobox-diven */
    height: 8vh;
  }

  pre {
    margin: 1px 0; /* Gi litt margin mellom <pre>-elementene */
    white-space: pre-wrap; /* Sørg for at lange linjer brytes om nødvendig */
    background-color: #ffffff; /* Hvit bakgrunn */
    color: #000000; /* Svart tekst */
    font-family: Arial, sans-serif; /* Arial skrifttype for <pre> */
    height: 12vh;

  }

  .app {
    display: flex;
    justify-content: center; /* Sentrer horisontalt */
    align-items: center; /* Sentrer vertikalt */
    height: 100vh; /* Fyll hele høyden av visningsporten */
    background: rgb(45, 37, 82); /* Bakgrunnsfarge */
  }
</style>

<!-- rgb(4, 8, 28) 100%);
background: rgb(7, 19, 42); -->