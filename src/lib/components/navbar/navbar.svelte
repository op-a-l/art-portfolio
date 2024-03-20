<script>
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let navLogo = "menu";

  function changeState() {
    if (navLogo === "menu") {
      navLogo = "close";
    } else if (navLogo === "close") {
      navLogo = "menu";
    }
  }

  const navLinks = ["Accueil", "Projets", "Mémoire", "Contact"];

  let transition = 400;
</script>

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>

<div class="navbar">
  <button on:click={changeState}>
    <span class="material-symbols-outlined">
      {@html navLogo}
    </span>
  </button>

  {#if navLogo === "close"}
    <ul class="my-container" transition:fly={{ x: -300, duration: transition }}>
      {#each navLinks as navLink, index (navLink)}
        <a href="#{navLink}">
          {navLink}
        </a>
      {/each}
    </ul>
  {/if}
</div>

<style>
  :root {
    --navbar-color: black;
  }

  .material-symbols-outlined {
    font-variation-settings:
      "FILL" 0,
      "wght" 600,
      "GRAD" 0,
      "opsz" 24;
    color: var(--navbar-color, white);
    margin: 0;
    font-size: var(--navbar-logo-size, 2rem);
  }

  .navbar {
    padding-left: 1rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 1.3rem;
    background-color: transparent;
    height: auto;
  }

  button {
    border: 0;
    background: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  .my-container {
    display: flex;
    flex-flow: column wrap;
    gap: 0.5rem;
    width: fit;
    text-align: left;
    margin-top: 0;
  }

  ul a {
    font-size: 0.8em;
    color: var(--navbar-color, white);
    cursor: pointer;
    padding: 0;
  }

  div {
    position: fixed;
    top: 2em;
    margin-left: 1em;
    z-index: 1000;
  }
</style>
