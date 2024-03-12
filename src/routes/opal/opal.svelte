<script>

    import { fade } from "svelte/transition";
    import { onMount } from 'svelte';

    // let isVisible = "false";

    // onMount(() => {
    //     isVisible = "true";
    // });

</script>

<!-- <style>

    div{
        display: block;
        background: whitesmoke;
        padding: 0;
        margin: 0; 
        height: 100vh;
        text-align: center;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    ._opal{
        color: black;
        font-family: "Libre Barcode 128 Text", system-ui;
        font-weight: 500;
        font-style: bold;
        font-size: 200px;
        letter-spacing: 2px;
    }

    p{
        font-family: "Quattrocento Sans", sans-serif;
        font-size: 20px;
        font-weight: 700;
    }

    .hi{
        position: relative;
        top: 100px;
        letter-spacing: 10px;
    }

    .me{
        position: relative;
        top: -100px;
        letter-spacing: 10px;
    }

</style> -->


<div class="flex">

    <span>
        <p class = "hi flex-1">Bonjour, je suis </p>
            <h1 
                class="_opal flex-1"
                in:fade={{delay: 250, duration: 3000}}
                >
                _opal
            </h1>
        <p class = "me flex-1">Compositeur de musiques électroniques</p>
    </span>

</div>