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
          </p>

          <iframe
            title="Liste de lecture"
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1781534394%3Fsecret_token%3Ds-KBxNkBWnJ6l&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div
            style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"
          >
            <a
              href="https://soundcloud.com/tournesol-840734247"
              title="_opal"
              target="_blank"
              style="color: #cccccc; text-decoration: none;">_opal</a
            >
            ·
            <a
              href="https://soundcloud.com/tournesol-840734247/sets/the-center-of-it-all/s-KBxNkBWnJ6l"
              title="_the center of it all"
              target="_blank"
              style="color: #cccccc; text-decoration: none;"
              >_the center of it all</a
            >
          </div>
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
    background: transparent;
    height: auto;
    border-radius: inherit;
    padding: 1rem 0 1rem 0;
  }

  .tabContent {
    min-height: 30rem;
    height: fit-content;
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
