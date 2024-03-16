<script lang="ts">
  import { Tab, TabItem, TabTitle } from "$lib/components/tab";
</script>

<body>
  <div class="projets">
    <h1 id="Projets">.projets</h1>
    <Tab>
      <div class="tabTitles">
        <TabTitle>
          <h2 slot="tabTitle">_nodes-everywhere</h2>
        </TabTitle>
        <TabTitle>
          <h2 slot="tabTitle">_samples-everywhere</h2>
        </TabTitle>
        <TabTitle>
          <h2 slot="tabTitle">_at-the-center-of-it-all</h2>
        </TabTitle>

        <!-- <TabTitle>
          <h2 slot="tabTitle">_samples-everywhere</h2>
        </TabTitle> -->
      </div>
      <div class="tabContent">
        <TabItem image="https://api.glitch.cool/uploads/cover_ab41c89410.jpg">
          <h3 slot="contentTitle">La création autour d'une recherche</h3>
          <p slot="contentDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </TabItem>
        <!-- <TabItem>
          <h3 slot="contentTitle">
            Un pack de sample de concert avec un travail sur l'organicité
          </h3>
          <p slot="contentDesc">
            Un pack avec plus de 300 samples organiques selon les définitions
            données dans mon mémoire
          </p>
        </TabItem> -->
      </div>
    </Tab>
  </div>
</body>

<style>
  body {
    height: 100vh;
    background-color: var(--background-color);
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 3rem;
  }

  .tabTitles {
    background: transparent;
    height: auto;
    border-radius: inherit;
  }

  .projets {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background: transparent;
    width: 65%;
  }

  h1 {
    font-size: 3rem;
    font-style: italic;
    font-family: "Montserrat", sans-serif;
    font-weight: bolder;
    padding-bottom: 3rem;
    background-color: transparent;
  }
</style>
