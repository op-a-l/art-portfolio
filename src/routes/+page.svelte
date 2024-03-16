<script>
  //Import des pages à nester
  import Apropos from "./a_propos/+page.svelte";
  import Projets from "./projets/+page.svelte";
  import Services from "./services/+page.svelte";
  import Contact from "./contact/+page.svelte";
  import TitlePage from "$lib/components/titlePage/titlePage.svelte";
  import Navbar from "$lib/components/navbar/navbar.svelte";

  //Import d'outils sveltekit
  import { slide } from "svelte/transition";
  import Root from "postcss/lib/root";
</script>

<!-- Contenu de la page -->
<body>
  <header>
    <nav>
      <Navbar />
    </nav>

    <TitlePage>
      <div slot="hello">bienvenue chez</div>
      <div slot="title">_<span>O</span>PAL</div>
      <div slot="subTitle">compositeur de musique électronique</div>
    </TitlePage>
  </header>

  <main>
    <Projets />
    <Apropos />
    <Services />
  </main>

  <footer>
    <Contact />
  </footer>
</body>

<style>
  :root {
    --shadow-color: none;
    --background-color: hsl(359, 100%, 84%);
    --titlePage-color: var(--background-color);
    --text-color: black;
  }

  body {
    width: 100%;
    height: auto;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
