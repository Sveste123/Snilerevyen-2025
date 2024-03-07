<script>
  import App from '$lib/components/App.svelte'
</script>

<div>
  <App />
</div>

<style>
  :global(body) {
    margin: 0;
  }

  div {
    width: 100vw;
    height: 100vh;
    background: rgb(7, 19, 42);
    background: radial-gradient(180deg, rgb(0, 0, 0) 0%, rgb(4, 8, 28) 100%);
  }
</style>
