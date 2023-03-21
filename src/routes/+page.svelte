<script lang="ts">
	import SketchCircle from '$lib/components/SketchCircle.svelte';
	import lizard from '$lib/images/lizard.jpg';

	export let displayCircle = false;

	function toggleDisplayCircle(): void {
		displayCircle = !displayCircle;
	}
</script>

<div class="flexWrapper">
	<img src={lizard} alt="lizard yoga pose" />
	<div>
		<h1>Experiencing God's Peace</h1>
		<p>
			by encountering His presence through movement, breath &#43; meditation on His precious, living
			Word.
		</p>
		<p>
			Would you like to schedule a faith based yoga Instructor? Wondering how <a href="/writings"
				>faith &#43; movement</a
			> intersect?
		</p>
		<p>Curious about <a href="/about">my journey</a>?</p>
		<button on:click={toggleDisplayCircle}>showCircle?</button>
		{#if displayCircle}
			<SketchCircle />
		{/if}
	</div>
</div>

<style>
	.flexWrapper {
		display: flex;
		gap: 2rem;
		margin: 2rem;
	}

	img {
		width: 40rem;
		border-radius: 20rem;
	}

	h1 {
		text-align: left;
	}

	p {
		margin: 1rem 1rem 1rem 2rem;
		text-align: left;
	}
</style>
