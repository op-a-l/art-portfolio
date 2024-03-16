<script context="module" lang="ts">
</script>

<script lang="ts">
  import TabItem from "$lib/components/tab/tabItem.svelte";
  import TabTitle from "$lib/components/tab/tabTitle.svelte";
</script>

<div class="tab">
  <slot />
</div>

<style>
  .tab {
    background-color: whitesmoke;
    height: auto;
    width: 100%;

    display: grid;
    grid-template-columns: 2fr 4fr;
    grid-template-rows: 1fr;
    align-items: center;

    box-shadow: 20px 20px 10px hsl(220 20% 20%);
    border-radius: 10px;
    border: 2px solid black;
  }
</style>
