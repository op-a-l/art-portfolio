<script>

    //Import des pages à nester
    import Apropos from './a_propos/+page.svelte';
    import Projets from './projets/+page.svelte';
    import Services from './services/+page.svelte';
    import Contact from './contact/+page.svelte';
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

    <style>
        .center{
            text-align: center;
            background: black;
        }

        ._opal{
            display: block;
            width: 100%;
            height: 100vh;
            background: white;
            padding: 0;
            margin: 0; 

            color: #A3D1AB;
            font-family: "Libre Barcode 128 Text", system-ui;
            font-weight: 400;
            font-style: normal;
            font-size: 50px;
        }

        ._opal p{
            font-family: "Quattrocento Sans", sans-serif;
            font-size: 10px;

        }

    </style>

    <div class="center _opal">

        <p>Bonjour, je suis </p>

        <h1>_opal</h1>

        <p>Compositeur de musiques électroniques</p>

    </div>

    <Apropos />
    <Projets />
    <Services />
    <Contact />

</body>
