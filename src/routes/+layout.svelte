<script lang="ts">
	import './defaultStyles.css';
	import './defaultAnimations.css';
	import './containerQueries.css';
	import Header from './Header.svelte';
	import oliveBranch from '$lib/images/sample-olive-branch.png';
</script>

<body>
	<Header />
	<slot />
	<div class="background">
		<img src={oliveBranch} alt="olive branch" class="branch1" />
		<img src={oliveBranch} alt="olive branch" class="branch2" />
	</div>
</body>

<style>
	.background {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -10;
	}

	img {
		width: 50%;
		position: absolute;
		opacity: 0.05;
	}
	.branch1 {
		left: 0;
		bottom: 0;
	}
	.branch2 {
		right: 0;
		top: 0;
		transform: rotate3d(0, 0, 1, 180deg);
	}
</style>
