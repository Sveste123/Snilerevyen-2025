<script lang="ts">
    import App from "../lib/components/App.svelte"
    import { List, type ListOptions } from 'svelte-tweakpane-ui';
</script>

<html lang="no">
    <head>
        <meta charset="UTF-8">
        <title>Snilerevyen 2025 - Spark opp og ta sats nedenfra</title>
    </head>

<style>
    .body {
        position: fixed;
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #717cff;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        line-height: 1.6;
    }
    .app {
        display: flex;
        position: fixed;
        left: 0%;
        top: 13%;
        justify-content: center; /* Sentrer horisontalt */
        align-items: center; /* Sentrer vertikalt */
        width: 100%;
        height: 90%; /* Fyll hele høyden av visningsporten */
        background-color: #717cff; /* Bakgrunnsfarge */
    }
    /* Watermark */
    .watermark-container {
        position: fixed;
        width: 80%;
        height: 80%;
        background-color: #717cff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }
    .watermark {
        position: fixed;
        top: 96%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(0deg);
        font-size: 14.5px;
        color: rgba(0, 0, 0, 0.3); /* Semi-transparent farge */
        white-space: nowrap;
        pointer-events: none; /* Gjør det ikke-klikkbart */
        z-index: 10;
    }
    /* Top Menu */
    .top-menu {
        position: fixed;
        width: 96%;
        top: 1.5%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #717cff;
        padding: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .top-menu a {
        margin: 15px;
        text-decoration: none;
        color: white;
        font-size: 18px;
        font-weight: bold;
    }
    .top-menu a:hover {
        color: #ffd700; /*Gullfarge ved hover */
    }

    /* Responsive Container */
    .page-container {
        max-width: 700px;
        margin: 60px auto;
        padding: 15px;
        background-color: #717cff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }


    /* Program */
    /* .container {
        max-width: 100%;
        height: 100%;
        margin: 50px auto;
        background-color: #717cff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        text-align: left;
    } */
    h1 {
        text-align: center;
        color: white;
        font-size: 2.5em;
        margin-bottom: 20px;
    }

    /* Fremhevede avsnitt */
    p {
        font-size: 1.7em;
        color: #FFD700;
        margin-bottom: 20px;
    }

    strong {
        color: white;
    }

    /* Liste-stil */
    ul {
        list-style-type: none; /* Fjern standard bullets */
        padding: 0;
    }

    ul li {
        background: white;
        color: #000000;
        padding: 10px 15px;
        margin-bottom: 10px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        font-size: 1.2em;
        pointer-events: none; /* Gjør det ikke-klikkbart */
    }

    ul li:hover {
        background: #5a68d8;
        cursor: pointer;
    }
    /* Media Query for Narrow Screens */
    @media (max-width: 1200px) {
        .top-menu {
        /* flex-direction: column; */
        position: fixed;
        width: 90%;
        left: 1.8%;
        top: 1.5%;
        }
        .top-menu a {
        margin: 5px;
        }
        .page-container {
        padding: 10px;
        }
    }

</style>

    <body>
        <div class="top-menu">
            <a href="./">Startside</a>
            <a href="./program">Program</a>
            <a href="./konseptvideo">Konseptvideo</a>
            <a href="https://bestill.albillett.no/1541" target="_blank">Billetter</a>
        </div>
        <div class="container">
            <slot />
        </div>
        <div class="watermark">
            Alle rettigheter tilhører © Snilerevyen | Org.nr. 916 144 989
        </div>
    </body>
</html>
  