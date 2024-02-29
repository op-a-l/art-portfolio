<script>

    //Import des pages à nester
    import Apropos from './a_propos/+page.svelte';
    import Projets from './projets/+page.svelte';
    import Services from './services/+page.svelte';
    import Contact from './contact/+page.svelte';

    //Import d'outils sveltekit
    import { slide } from 'svelte/transition';

    //Section pour la navBar
    let showNav = false;

    function toggleNav(){
        showNav = true
    }

    function hideNav(){
        showNav = false
    }

</script>

<!-- Contenu de la page -->

<header>

    <style>

        html, body{
            margin: 0; 
            padding: 0;
        }

        .material-symbols-outlined {
            font-variation-settings:
            'FILL' 100,
            'wght' 600,
            'GRAD' 0,
            'opsz' 24;
        }

        .container{
            display: flex;
            flex-direction: column;
        }

        nav{
            position: fixed;
            padding: 1em;
        }

    </style>

    <nav>

        <div class="logo container"
            on:mouseover={toggleNav} 
            on:mouseleave={hideNav}
            on:focus={toggleNav}
            on:blur={hideNav}
            role="button" 
            tabindex="0"  
            aria-haspopup="true"
            aria-expanded={showNav}>

            <span class="material-symbols-outlined">
                menu
            </span>

            {#if showNav} 
            <a href="#a_propos" transition:slide={{duration: 100}}>.à propos</a>
            <a href="#projets" transition:slide={{duration: 200}}>.projets</a>
            <a href="#services" transition:slide={{duration: 300}}>.services</a>
            <a href="#contact" transition:slide={{duration: 400}}>Contact</a>
            {/if}
            
        </div>

    </nav>

</header>

<body>

    <style>
        .center{
            text-align: center;
        }

        ._opal{
            display: block;
            width: 100%;
            height: 100vh;
            background: red;
            padding: 0;
            margin: 0; 
        }
    </style>

    <div class="center _opal">

        Bonjour, je suis 

        <h1>_opal</h1>

        Compositeur de musiques électroniques

    </div>

    <Apropos />
    <Projets />
    <Services />
    <Contact />

</body>
