<script>
	let { price, question, answer, showAnswer = false } = $props();
	
	let mode = $state(0); // 0 = price, 1 = question, 2 = blank, 3 = daily double

	let textColor = $derived(mode === 0 || mode === 3 ? 'gold' : 'white');

	$effect(() => {
		if (price) {
			// Reset mode when new questions come
			mode = 0;
		}
	});

	function switchMode() {
		if (mode === 0) {
			if (Math.floor(Math.random() * 15) === 0) {
				// 1/15 of DD
				const audio = new Audio('/daily_double.mp3');
				audio.play();
				mode = 3;
			} else {
				mode = 1;
			}
		} else if (mode === 1) {
			mode = 2;
		} else if (mode === 3) {
			mode = 1;
		} else {
			// Switch back to price
			mode = 0;
		}
	}
</script>

{#if showAnswer}
	<button class="answer">
		<div class="price">
			${price}
		</div>
		<div>
			{answer}
		</div>
	</button>
{:else}
	<button
		class="question {mode === 1 || mode === 3 ? 'full-screen' : ''}"
		style="color: {textColor}"
		onclick={switchMode}
	>
		{#if mode === 0}
			${price}
		{:else if mode === 1}
			<div class="active">
				{question}
			</div>
		{:else if mode === 3}
			<div class="active">DAILY DOUBLE</div>
		{:else}
			<br />
		{/if}
	</button>
{/if}

<style>
	button {
		background-color: blue;
		height: 6rem;
	}

	.full-screen {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		font-size: xx-large;
	}

	.active {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.answer {
		background-color: blue;
		height: 6rem;
		color: gold;
	}
</style>
