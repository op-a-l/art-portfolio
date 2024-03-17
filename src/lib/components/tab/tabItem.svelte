<script>
  import { activeId } from "./activeId";

  export let image = "undefined";
  export let thisId = "undefined";

  $: active = $activeId === thisId;
</script>

{#if active}
  <div class="tabItem">
    <div class="content">
      <h2 class="contentTitle">
        <slot name="contentTitle" />
      </h2>

      {#if image != "undefined"}
        <img src={image} alt="" />
      {/if}

      <p class="contentDesc">
        <slot name="contentDesc" />
      </p>
    </div>
  </div>
{/if}

<style>
  .tabItem {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 100%;
    padding: 2rem;
    background: transparent;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    flex-flow: column nowrap;

    width: 100%;
  }

  .content .contentTitle {
    font-family: "Montserrat", sans-serif;
    font-size: large;
    text-align: center;
    font-weight: 600;
    font-variation-settings: "wght" 700;
    padding-bottom: 1rem;
    width: 100%;
  }

  .content img {
    width: 100%;
    height: 7rem;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: none;
  }

  .content .contentDesc {
    text-align: justify;
    align-items: center;
    text-align: left;
    font-family: "Montserrat", sans-serif;
    font-size: medium;
    font-variation-settings: "wght" 400;
    width: 100%;
  }
</style>
