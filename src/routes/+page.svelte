<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let tournaments = ['all', 'college', 'teens', 'celebrity'];
	let selectedTournament = tournaments[0];

	let episodes = [];
	let episodeNumber = 1;

	// Function to load the appropriate JSON file based on the selected tournament
	/**
	 * @param {string} tournament
	 */
	async function loadTournament(tournament) {
		try {
			const response = await fetch(`episodes/${tournament}.json`);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const jsonData = await response.json();
			episodes = jsonData;
		} catch (error) {
			console.error('Error loading JSON data:', error);
		}
	}

	onMount(() => {
		loadTournament(selectedTournament);
	});

	// Watch for changes to the selectedTournament and load the new data
	$: if (selectedTournament) {
		loadTournament(selectedTournament);
		episodeNumber = 1;
	}
</script>

<main>
	<h1>Jeopardy Setup</h1>
	<select bind:value={selectedTournament}>
		{#each tournaments as tournament}
			<option value={tournament}>{tournament}</option>
		{/each}
	</select>

	<p>You selected: {selectedTournament}</p>
	<p>Number of episodes: {episodes.length}</p>
	<select bind:value={episodeNumber}>
		{#each episodes as e, i}
			<option value={i + 1}>{i + 1}</option>
		{/each}
	</select>
	{#if episodes.length}
		<p>Episode Title: {episodes[episodeNumber - 1].info.title}</p>
	{/if}
	<button on:click={() => goto(`/${selectedTournament}/${episodeNumber}`)}> PLAY </button>
</main>

<style>
	main {
		text-align: center;
		padding: 50px;
		font-family: Arial, sans-serif;
	}

	select {
		padding: 10px;
		font-size: 16px;
		margin-top: 20px;
	}

	p {
		margin-top: 20px;
		font-size: 18px;
	}
</style>
