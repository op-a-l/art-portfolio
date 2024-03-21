<script lang="ts">
  import { Tab, TabItem, TabTitle } from "$lib/components/tab";
</script>

<body>
  <div class="projets">
    <h1 id="Projets">.projets</h1>
    <Tab>
      <div class="tabTitles">
        <TabTitle thisId="_nodes-everywhere">
          <h2 slot="tabTitle">_nodes-everywhere</h2>
        </TabTitle>
        <TabTitle thisId="_samples-everywhere">
          <h2 slot="tabTitle">_samples-everywhere</h2>
        </TabTitle>
        <TabTitle thisId="_at-the-center-of-it-all">
          <h2 slot="tabTitle">_at-the-center-of-it-all</h2>
        </TabTitle>

        <!-- <TabTitle>
            <h2 slot="tabTitle">_samples-everywhere</h2>
          </TabTitle> -->
      </div>
      <div class="tabContent">
        <TabItem
          image="https://api.glitch.cool/uploads/cover_ab41c89410.jpg"
          thisId="_nodes-everywhere"
        >
          <h3 slot="contentTitle">La création autour d'une recherche</h3>
          <p slot="contentDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
            <br />
            <a
              href="https://soundcloud.com/tournesol-840734247/sets/the-center-of-it-all/s-KBxNkBWnJ6l?si=85461404d3a844e899a25236eaaf5af6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
              target="_blank"
            >
              <i class="fa-brands fa-soundcloud" />
            </a>
          </p>
        </TabItem>
        <TabItem
          image="https://f4.bcbits.com/img/a4160448333_16.jpg"
          thisId="_samples-everywhere"
        >
          <h3 slot="contentTitle">
            Un pack de sample de concert avec un travail sur l'organicité
          </h3>
          <p slot="contentDesc">
            Un pack avec plus de 300 samples organiques selon les définitions
            données dans mon mémoire
          </p>
        </TabItem>
        <TabItem
          image="https://f4.bcbits.com/img/a4160448333_16.jpg"
          thisId="_at-the-center-of-it-all"
        >
          <h3 slot="contentTitle">
            Formes naturelles dans la musique électronique
          </h3>
          <p slot="contentDesc">
            Ce travail cherche à articuler la notion d'organicité, connue en
            architecture ou en chimie, avec la musique électronique
            contemporaine. _Opal s'inspire de concepts naturels dans ce premier
            essai d'album autour de l'organicité.
          </p>
        </TabItem>
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
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
    background: transparent;
    height: auto;
    border-radius: inherit;
    padding: 1rem 0 1rem 0;
  }

  .tabContent {
    min-height: 30rem;
    height: fit-content;
  }

  .contentDesc {
    display: flex;
    gap: 1rem;
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

  .fa-brands {
    font-size: 2rem;
    align-self: right;
  }
</style>
