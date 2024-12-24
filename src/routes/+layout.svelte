<script lang="ts">
    import App from "../lib/components/App.svelte"
    import { List, type ListOptions } from 'svelte-tweakpane-ui';
</script>

<div class="top-menu">
    <a href="./">Startside</a>
    <a href="./program">Program</a>
    <a href="./konseptvideo">Konseptvideo</a>
    <a href="./snow">Snø</a>
    <a href="https://bestill.albillett.no/1541" target="_blank">Billetter</a>
</div>
<div class="page-container">
    <slot />
</div>
<div class="watermark">
    Alle rettigheter tilhører © Snilerevyen | Org.nr. 916 144 989
</div>