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
    background: rgb(89, 113, 158);
    background: linear-gradient(180deg, rgb(59, 95, 173) 0%, rgb(4, 8, 28) 100%);
  }
</style>
