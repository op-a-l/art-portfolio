<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

<script>
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing';

	
	let navLogo="menu";
	
	function changeState (){
		if (navLogo === "menu"){
			navLogo = "close";
		} else if (navLogo === "close"){
			navLogo ="menu";
		}
	}

	let navLinks = ["Accueil", "Projets", "Mémoire", "Contact"];

	let transition = 400;
</script>

<style>
	.material-symbols-outlined {
	  font-variation-settings:
	  'FILL' 0,
	  'wght' 600,
	  'GRAD' 0,
	  'opsz' 24;
		color: black;
		margin: 0;
	}

	button{
		border: 0;
		background: transparent;
		padding: 0;
		margin: 0;
		cursor: pointer;
	}

	.container{
		display: flex;
		flex-flow: column wrap;
		padding: 10px;
		width: 7%;
		text-align: left;
		margin-top: 0;
	}

	ul a{
		font-size: .8em;
		color: black;
		cursor: pointer;
		padding: 0;
	}

	div{
		position: fixed;
		top: 2em;
		margin-left: 1em;
		z-index: 1000;
	}
</style>

<div>
	<button
		on:click={changeState}>
			<span class="material-symbols-outlined">
				{@html navLogo}
			</span>	
	</button>
	
	{#if navLogo === "close"}
		<ul 
			class="container"
			transition:fly={{x: -300, duration:transition}}>
			{#each navLinks as navLink, index (navLink)}
					<a 
						href="#{navLink}"
					>
						{navLink}
					</a>
			{/each}
		</ul>
	{/if}
</div>