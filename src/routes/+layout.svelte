<style>
    :global(body) {
        padding: 0;
        margin: 0;
        display: grid;
        place-content: center;
        min-height: 100vh;
        background: #fdfdfd;
    }

    :global(h1, h2, h3, h4) {
        padding: 0;
        margin: 0;
    }

    div {
        aspect-ratio: 9 /16;
        width: 400px;
        max-width: 100%;
        display: block;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);
        border-radius: 0.5em;
    }

</style>

<div>
    <slot />
</div>