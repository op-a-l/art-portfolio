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
    height: 4rem;
    padding-left: 2rem;

    font-family: "Montserrat", sans-serif;
    font-size: large;
    text-align: left;
    font-variation-settings: "wght" 700;

    /* border-radius: 0 15px 15px 0; */
    border-radius: 15px;

    top: 0;
    left: 0;

    transition:
      top 1s,
      left 1s,
      box-shadow 1s;
  }

  button:hover {
    background: hsl(180, 100%, 84%);
    box-shadow: 0px 0px 10px hsl(180, 100%, 84%);
    position: relative;
    top: -10px;
    left: -10px;

    transition:
      top 1s,
      left 1s,
      box-shadow 1s;
  }
</style>
