<div class="my-container">
  <div class="title-page">
    <div class="before">
      <slot name="hello" />
    </div>
    <div class="title">
      <slot name="title" class="title" />
    </div>
    <div class="after">
      <slot name="subTitle" class="after" />
    </div>
  </div>
</div>

<style>
  .my-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: var(--background-color, hsl(359, 100%, 83%));
    padding: 0;
    margin: 0;
    align-items: center;
  }

  .title-page {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    background-color: var(--titlePage-color, hsl(47, 100%, 50%));
    width: 100%;
    height: fit;
    padding: 3em;
    justify-content: center;
    align-items: center;

    color: var(--text-color, whitesmoke);
  }

  .before {
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }

  .title {
    font-size: 10rem;
    font-style: italic;
    font-family: "Montserrat", sans-serif;
    font-weight: bolder;
  }

  .after {
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }
</style>
