<script lang="ts">
  //Import des pages à nester
  import Projets from "./projets.svelte";
  import TitlePage from "$lib/components/titlePage/titlePage.svelte";

  //Import d'outils sveltekit
  import { slide } from "svelte/transition";
  import Root from "postcss/lib/root";
</script>

<!-- Contenu de la page -->
<body>
  <header>
    <TitlePage>
      <div slot="hello">Bonjour, je suis</div>
      <div slot="title">_OPAL</div>
      <div slot="subTitle">compositeur de musique électronique</div>
    </TitlePage>
  </header>

  <main>
    <Projets />
  </main>
</body>

<style>
  :root {
    --shadow-color: none;
    --background-color: hsl(359, 100%, 84%);
    --titlePage-color: var(--background-color);
    --text-color: black;
    --navbar-logo-size: 2rem;
    --text-color: hsl(180, 100%, 84%);
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
