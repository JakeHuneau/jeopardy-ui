<script>
	import Question from './Question.svelte';
	
	let { categoryName, questions, isDouble = 0, showAnswer = false } = $props();
</script>

<div class="category">
	<div class="title">{categoryName}</div>
	<div class="questions">
		{#each questions as question, i}
			<Question
				price={(i + 1) * 100 * (isDouble + 1)}
				question={question.question}
				answer={question.answer}
				{showAnswer}
			/>
		{/each}
	</div>
</div>

<style>
	.category {
		display: flex;
		flex-direction: column;
	}

	.title {
		text-align: center;
		background-color: blue;
		color: white;
		height: 3rem;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.questions {
		display: grid;
		grid-template-rows: repeat(5, 1fr);
		gap: 10px;
		width: 100%;
	}
</style>
