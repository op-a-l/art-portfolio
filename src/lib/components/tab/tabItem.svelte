<script>
  export let image = "undefined";
</script>

<div class="tabItem">
  <aside>
    <button class="title">
      <slot name="tabTitle" />
    </button>
  </aside>

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

<style>
  .tabItem {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    padding: 2rem;
  }

  aside {
    /* background-color: red; */
    flex: 2;

    display: grid;
    align-items: center;
    justify-items: end;
  }

  aside button {
    text-align: right;
    padding-right: 2rem;
    font-family: "Roboto", sans-serif;
    font-size: large;
    width: 3rem;
    height: 3rem;
  }

  .content {
    flex: 5;
    display: flex;
    justify-content: right;
    align-items: center;
    margin: 1rem;
    flex-flow: column nowrap;
  }

  .content .contentTitle {
    font-family: "Roboto", sans-serif;
    font-size: medium;
    text-align: left;
    padding-bottom: 1rem;
  }

  .content img {
    width: 60%;
    height: 15rem;
    object-fit: cover;
    padding-bottom: 1rem;
  }

  .content .contentDesc {
    text-align: justify;
    align-items: center;
  }
</style>
