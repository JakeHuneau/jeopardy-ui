<script>
	import Category from './Category.svelte';
	import FinalJeopardy from './FinalJeopardy.svelte';

	let { data } = $props();
	
	let mode = $state(0); // 0 = single jeopardy, 1 = double jeopardy, 2 = Final jeopardy
	let startIndex = $state(0);
	let endIndex = $state(6);

	// Reactive statement to update the categories to display based on startIndex and endIndex
	let displayedCategories = $derived(data.episode.categories.slice(startIndex, endIndex));

	function switchMode() {
		if (mode === 0) {
			mode = 1;
			startIndex = 6;
			endIndex = 12;
		} else if (mode === 1) {
			mode = 2;
			startIndex = 0;
			endIndex = 6;
		} else {
			mode = 0;
		}
		console.log(`${mode}, ${startIndex}, ${endIndex}`);
	}

	let buttonText = $derived(
		mode === 0 ? 'Double Jeopardy' :
		mode === 1 ? 'Final Jeopardy' :
		'Single Jeopardy'
	);
</script>

<div class="page">
	<div class="header">
		<p>{data.episode.info.title} -- {data.episode.info.comment}</p>
		<button onclick={switchMode}>
			{buttonText}
		</button>
	</div>
	{#if mode < 2}
		<div class="categories">
			{#each displayedCategories as category}
				<Category
					categoryName={category.category_name}
					questions={category.questions}
					isDouble={mode}
				/>
			{/each}
		</div>
	{:else}
		<div class="final">
			<FinalJeopardy
				category={data.episode.categories[12].category_name}
				question={data.episode.categories[12].questions[0].question}
				answer={data.episode.categories[12].questions[0].answer}
			/>
		</div>
	{/if}
</div>

<style>
	.header {
		display: flex;
		flex-direction: row;
	}

	.page {
		display: flex;
		flex-direction: column;
	}

	p {
		text-align: center;
		width: 100%;
	}

	.categories {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 10px;
	}
</style>
