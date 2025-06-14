<script>
	let { category, question, answer, showAnswer = false } = $props();

	let mode = $state(0); // 0 = category, 1 = question
	
	function switchMode() {
		if (mode === 0) {
			mode = 1;
		} else {
			mode = 0;
		}
	}
</script>

<button class="final" onclick={switchMode}>
	{#if showAnswer}
		<div style="color: black">{category}</div>
		{question}
		<div class="answer">{answer}</div>
	{:else if mode === 0}
		{category}
	{:else}
		{question}
	{/if}
</button>

<style>
	.final {
		background-color: blue;
		color: white;
		width: 100%;
		height: 35rem;
		font-size: xx-large;
	}

	.answer {
		color: gold;
	}
</style>
