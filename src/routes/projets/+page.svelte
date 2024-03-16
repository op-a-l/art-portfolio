<script lang="ts">
  import { Tab, TabItem } from "$lib/components/tab";
</script>

<body class="flex justify-center">
  <div class="w-3/5">
    <h1 class="pb-3" id="Projets">.projets</h1>
    <Tab>
      <TabItem image="https://api.glitch.cool/uploads/cover_5a94df0144.jpg">
        <div slot="tabTitle">_nodes everywhere</div>
        <div slot="contentTitle">Création autour d'une recherche</div>
        <div slot="contentDesc">
          Le projet est coool Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla tristique sem sed diam viverra, et congue metus viverra.
          Nulla eu mi sit amet enim consequat commodo. Vivamus tincidunt, diam
          porttitor luctus imperdiet, lacus felis auctor quam, in tincidunt nunc
          enim sit amet mauris. Nam eget lectus volutpat, aliquet lectus vitae,
          vehicula nisl. Nunc non tempor orci.
        </div>
      </TabItem>
      <!-- <TabItem image="https://f4.bcbits.com/img/a2013469324_10.jpg">
        <div slot="tabTitle">_house</div>
        <div slot="contentTitle">Faire danser les corps</div>
        <div slot="contentDesc">
          Cras velit urna, scelerisque in dictum hendrerit, euismod a nisi.
          Pellentesque dictum faucibus dapibus. Fusce ut ante egestas, pharetra
          mauris at, sagittis lectus. Ut in euismod elit. Vivamus fermentum,
          ante scelerisque gravida eleifend, purus nisl malesuada sapien,
          ultrices elementum nisl urna eget tellus. Mauris arcu ex, dignissim
          eget placerat vitae, suscipit sed dolor.
        </div>
      </TabItem> -->
    </Tab>
  </div>
</body>

<style>
  body {
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: var(--background-color);
  }

  h1 {
    font-size: 3rem;
    font-style: italic;
    font-family: "Montserrat", sans-serif;
    font-weight: bolder;
  }
</style>
