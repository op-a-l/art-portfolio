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
  :root {
    --shadow-color: none;
    --background-color: hsl(359, 100%, 84%);
    --titlePage-color: var(--background-color);
    --text-color: black;
  }

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
    box-shadow: 0px 0px 5px var(--shadow-color, black);
    border-radius: 10px;
    width: 45%;
    height: fit;
    padding: 3em;
    justify-content: center;
    align-items: center;

    color: var(--text-color, whitesmoke);
    border: 1rem;
    border-color: var(--border-color, black);
  }

  .before {
    font-size: large;
    font-family: "Roboto", sans-serif;
  }

  .title {
    font-size: 7rem;
    font-style: italic;
    font-family: "Montserrat", sans-serif;
    font-weight: bolder;
  }

  .after {
    font-size: large;
    font-family: "Roboto", sans-serif;
  }
</style>
