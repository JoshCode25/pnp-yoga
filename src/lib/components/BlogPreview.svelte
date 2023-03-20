<script lang="ts">
	import defaultThumbnail from '$lib/images/default.jpg';

	export let name = 'Blog Title';
	export let summary = 'Blog Summary';
	export let thumbnailImage = defaultThumbnail;
</script>

<div class="flexWrapper grow">
	<img src={thumbnailImage} alt="thumbnail description" />
	<div class="textWrapper">
		<h2>{name}</h2>
		<p>{summary}</p>
	</div>
</div>

<style>
	.flexWrapper {
		display: flex;
		gap: 2rem;
		margin: 2rem;
	}
	.flexWrapper:hover {
		cursor: pointer;
	}

	img {
		width: 10rem;
		border-radius: 1rem;
	}

	.textWrapper {
		margin: 1rem 2rem;
	}
	.textWrapper * {
		text-align: left;
	}

	p {
		margin: 1rem;
	}
</style>
