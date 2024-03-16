<script lang="ts">
	import { getContext } from 'svelte';

	export let open = false;

	function toggleOpen() {
		open = !open;
	}

	const componentID = crypto.randomUUID();
	const colapse = getContext('colapse');
	const activeComponentID = getContext('active');

	function setActive() {
		$activeComponentID = componentID;
	}

	function handleClick() {
		colapse ? setActive() : toggleOpen();
	}

	$: open && colapse && setActive(); //Si open et colapes sont vraies, setActive() est executée.
	$: isActive = $activeComponentID === componentID; //isActive prend la valeur true ou false en fonction de l'égalité entre la valeur du store $activeComponentID et componentID
	$: isOpen = colapse ? isActive : open; //Si colapse est vraie, isOpen prend la valeur de isActive, sinon de open.

	//console.log(colapse, $activeComponentID, componentID);
</script>

<div class="accordion-item">
	<button on:click={handleClick} class="accordion-toggle">
		<div class="accordion-title">
			<slot name="title" />
		</div>

		<div class="accordion-caret">👉</div>
	</button>

	{#if isOpen}
		<div class="accordion-content">
			<slot name="content" />
		</div>
	{/if}
</div>

<style>
	.accordion-toggle {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: var(--accordion-padding, 1rem);
		color: var(--accordion-color, inherit);
		font: inherit;
		font-weight: 600;
		border: none;
		background: none;
		cursor: pointer;
		border-radius: var(--accordion-radius, 4px);
		transition: background-color 0.1s ease;
	}

	.accordion-toggle:hover {
		background-color: hsl(220 20% 20%);
	}

	.accordion-content {
		padding: var(--accordion-padding, 1rem);
		color: var(--accordion-color, inherit);
	}
</style>
