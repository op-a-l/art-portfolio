<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  let isVisible = "false";

  onMount(() => {
    isVisible = "true";
  });
</script>

<div class="flex h-screen bg-zinc-100 justify-center items-center">
  <div
    class="flex flex-col text-center items-center justify-center bg-inherit px-4 h-fit"
  >
    <p class="hi flex-1 justify-center font-quatro text-3xl">
      Bonjour, je suis
    </p>

    {#if isVisible}
      <h1
        class="_opal flex-1 bg-inherit font-source font-medium text-9xl text-emerald-300 items-center p-10"
        in:fade={{ delay: 250, duration: 3000 }}
      >
        _opal
      </h1>
    {/if}

    <p class="me flex-1 bg-inherit font-quatro text-3xl">
      Compositeur de musiques électroniques
    </p>
  </div>
</div>
