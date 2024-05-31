<script>
	import Question from './Question.svelte';
	export let categoryName;
	export let questions;
	export let isDouble = 0;
	export let showAnswer = false;
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
		text-align: center; /* Ensures text within the <p> is centered */
		background-color: blue;
		color: white;
		height: 3rem;
		width: 100%; /* Makes the <p> take the full width of the container */
		display: flex;
		align-items: center; /* Centers the text vertically */
		justify-content: center; /* Optional: Centers the text horizontally */
	}

	.questions {
		display: grid;
		grid-template-rows: repeat(5, 1fr); /* Adjust the number of rows as needed */
		gap: 10px; /* Space between columns */
		width: 100%;
	}
</style>
