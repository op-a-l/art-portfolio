<div>
  <button>
    <slot name="tabTitle" />
  </button>
</div>

<style>
  button {
    background: inherit;
    width: 100%;
    padding: 1rem;

    text-align: right;
    font-family: "Roboto", sans-serif;
    font-weight: 400;

    border-radius: 0 5px 5px 0;
  }

  button:hover {
    background: white;
  }
</style>
