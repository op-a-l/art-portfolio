<script lang="ts">
  import { activeId } from "./activeId";

  export let thisId = "undefined";

  function setActive() {
    $activeId = thisId;
  }
</script>

<div>
  <button on:click={setActive}>
    <slot name="tabTitle" />
  </button>
</div>

<style>
  button {
    background: inherit;
    width: 100%;
    padding: 1rem;

    font-family: "Montserrat", sans-serif;
    font-size: large;
    text-align: right;
    font-weight: 600;
    font-variation-settings: "wght" 700;

    border-radius: 0 5px 5px 0;
  }

  button:hover {
    background: white;
  }
</style>
