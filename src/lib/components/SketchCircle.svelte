<script lang="ts">
	import { draw } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { navigating } from '$app/stores';
	import { base } from '$app/paths';

	export let path = '/';
	export let name = 'home';

	let mouseEntered = false;
	let displayCircle = false;
	let duration = 300;
	let easing = quintInOut;

	function showCircle(): void {
		if (!mouseEntered) {
			displayCircle = true;
		}
		mouseEntered = true;
	}
	function hideCircle(): void {
		displayCircle = false;
		if (!$navigating) {
			mouseEntered = false;
		}
	}
	$: if ($navigating) hideCircle();
</script>

<a on:mouseenter={showCircle} on:mouseleave={hideCircle} href={base + path}>
	<div class="flexWrapper">
		{name}
		{#if displayCircle}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				stroke-linecap="round"
				stroke-linejoin="round"
				viewBox="1202.803 -75.871 207.006 170.609"
			>
				<path
					transition:draw={{ duration, easing }}
					fill="none"
					stroke="rgb(60, 70, 83)"
					stroke-width="5"
					d="M1308.71-29.234q-3.52-2.012-6.508-2.572t-7.414.137-8.646 1.835-8.07 2.528-10.516 6.182-12.379 10.472-9.894 12.356-6.25 13.4-.962 14.23 4.996 13.186 10.316 9.591 14.78 5.832 17.262 2.234 20.147-2.024 20.997-6.403 17.953-9.341 14.501-11.474 10.571-13.41 5.119-16.502-.926-16.962-6.546-13.447-15.7-8.979-23.554-3.232-22.892 1.47-23.132 3.364l-12.853 1.87"
				/>
			</svg>
		{/if}
	</div>
</a>

<style>
	a {
		position: relative;
	}
	.flexWrapper {
		display: flex;
		justify-content: center;
	}
	svg {
		display: block;
		position: absolute;
		top: -4rem;
		width: 15rem;
		height: 12rem;
	}
</style>
