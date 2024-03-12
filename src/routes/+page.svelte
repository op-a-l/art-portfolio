<script>

    //Import des pages à nester
    import Apropos from './a_propos/+page.svelte';
    import Projets from './projets/+page.svelte';
    import Services from './services/+page.svelte';
    import Contact from './contact/+page.svelte';
    import Opal from './opal/opal.svelte';
    import Navbar from './navbar.svelte';

    //Import d'outils sveltekit
    import { slide } from 'svelte/transition';

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
            'FILL' 255,
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

        <Navbar />

    </nav>

</header>

<body>

    <Opal />
    <Apropos />
    <Projets />
    <Services />
    <Contact />

</body>
