<script lang="ts">
	import BlogPreview from '$lib/components/BlogPreview.svelte';
	import reverseWarrior from '$lib/images/reverse-warrior.jpg';
</script>

<div class="flexWrapper">
	<BlogPreview />
	<BlogPreview thumbnailImage={reverseWarrior} />
	<BlogPreview />
	<BlogPreview />
</div>

<style>
	.flexWrapper {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
	}
</style>
