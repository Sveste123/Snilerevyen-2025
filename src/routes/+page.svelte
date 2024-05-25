<script>
  import App from '$lib/components/App.svelte'
</script>

<!-- <a href="./about">about</a> -->

<div>
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

  div {
    width: 100vw;
    height: 100vh;
    background: rgb(0, 0, 0);
    background: radial-gradient(180deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%);
  }

  a {
    width: 100vw;
    height: 100vh;
    background: rgb(7, 19, 42);
    background: radial-gradient(180deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%);
    text-decoration: none;
    color: white;
    font-style: oblique;
  }
</style>

<!-- rgb(4, 8, 28) 100%);
background: rgb(7, 19, 42); -->