<script lang="ts">
    function previousButton(e: Event){
        console.log("previousButton is clicked");
        const scroller = document.querySelector('.youtube-scroller');
        const itemWidth = scroller.firstElementChild.offsetWidth;
        scroller.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        showIndicator = false;
    }

    function nextButton(e: Event){
        const scroller = document.querySelector('.youtube-scroller');
        const itemWidth = scroller.firstElementChild.offsetWidth;
        scroller.scrollBy({ left: itemWidth, behavior: 'smooth' });
        showIndicator = false;
    }
    
    let showIndicator = true; // Bruker en tilstand for å styre synlighet

    function showIndicatorFalse(e: Event){
        showIndicator = false;
    }
</script>


<div class="fixed-page-container">
    <div class="page-container">
        <h1>Hvem er vi?</h1>
        <p><strong>Vi er skolerevyen ved Lillestrøm videregående skole. Revyen er helt elevstyrt og har vært det helt siden den ble startet.</strong></p>
    </div>
</div>

<div class="youtube-scroller-container">
    {#if showIndicator}
        <img class="scrollhand" src="/scrollhand.png"/>
    {/if}
    <button class="scroll-button left-button" aria-label="Scroll left" on:click={previousButton}>&#9664;</button>
    <div class="youtube-scroller" on:scroll={showIndicatorFalse}>
        <div class="youtube-item">
            <iframe
                title="Video 1"
                src="https://www.youtube.com/embed/KV9tyDtX304"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
        <div class="youtube-item">
            <iframe
                title="Video 2"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
        <div class="youtube-item">
            <iframe
                title="Video 3"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
    </div>
    <button class="scroll-button right-button" aria-label="Scroll right" on:click={nextButton}>&#9654;</button>
</div>
