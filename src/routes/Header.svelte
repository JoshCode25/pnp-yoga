<script lang="ts">
	import { base } from '$app/paths';
	import SketchCircle from '$lib/components/SketchCircle.svelte';

	interface NavType {
		path: string;
		name: string;
	}

	let navArray: NavType[] = [
		{ path: '/', name: 'home' },
		{ path: '/about', name: 'about' },
		{ path: '/contact', name: 'contact' },
	];
</script>

<header>
	<a class="logoAnchor" href={`${base}/`}>peace &#43; presence yoga</a>
	<div class="navWrapper">
		{#each navArray as { path, name }}
			<SketchCircle {path} {name} />
		{/each}
	</div>
</header>

<style lang="postcss">
	header {
		width: 100%;
	}
	.logoAnchor {
		display: inline-block;
		margin: 1rem;
		font-size: 4rem;
		font-family: Arial, Helvetica, sans-serif;

		&:visited {
			color: var(--primary-dark);
		}
	}

	div.navWrapper {
		display: flex;
		justify-content: flex-end;
		background: var(--primary-color);
		border-radius: 1rem;
	}
	a {
		border-radius: 1rem;
	}
</style>
