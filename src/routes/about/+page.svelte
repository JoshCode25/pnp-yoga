<script lang="ts">
	import tree from '$lib/images/tree.jpg';
</script>

<h1>About Me</h1>
<div class="flexWrapper">
	<img src={tree} alt="tree pose" />
	<div>
		<p>This is how I discovered yoga...</p>
		<p>This is how God provided for me to step in to teaching...</p>
		<p>This is what I've seen God do on this journey...</p>
		<p>This is my heart for anyone I get to serve moving forward...</p>
	</div>
</div>

<style>
	img {
		width: 30rem;
		border-radius: 3rem;
	}

	.flexWrapper {
		display: flex;
		margin: 2rem;
		gap: 2rem;
		justify-content: center;
	}

	p {
		text-align: left;
		margin: 1rem;
	}
</style>
