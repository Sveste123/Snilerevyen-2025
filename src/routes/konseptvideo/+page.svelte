<div class="video-container">
    <iframe title="Konseptvideo" src="https://www.youtube.com/embed/KV9tyDtX304" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Konseptvideo</iframe>
</div>
<style>
    /* Konseptvideo */
    .video-container {
        position: fixed; /* Fikser boksen slik at den alltid er på skjermen */
        top: 50%; /* Plasserer senter i høyden */
        left: 50%; /* Plasserer senter i bredden */
        transform: translate(-50%, -50%); /* Flytter elementet tilbake for perfekt sentrering */
        width: 80%; /* Responsiv bredde */
        max-width: 700px; /* Maks bredde for større skjermer */
        height: 50%; /* Holder høyden proporsjonal */
        border: 4px solid white;
        border-radius: 40px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 1000; /* Sørg for at det er over alt annet */
    }

    iframe {
        width: 100%;
        height: 50vh; /* Responsiv høyde */
        border: none;
    }
</style>