<script lang="ts">
	import lizard from '$lib/images/lizard.jpg';
</script>

<div class="homeTextContainer">
	<div class="flexWrapper">
		<img src={lizard} alt="lizard yoga pose" />
		<div class="asideWrapper">
			<h1>Experiencing God's Peace</h1>
			<p>
				by encountering His presence through movement, breath &#43; meditation on His precious,
				living Word.
			</p>
			<p>
				Would you like to schedule a faith based yoga Instructor? Wondering how <a href="/writings"
					>faith &#43; movement</a
				> intersect?
			</p>
			<p>Curious about <a href="/about">my journey</a>?</p>
		</div>
	</div>
</div>

<style lang="postcss">
	.homeTextContainer {
		container: homeText / inline-size;
	}
	.flexWrapper {
		display: flex;
		justify-content: center;
		gap: 2rem;
		margin: 2rem;
	}

	.asideWrapper {
		max-width: 50rem;
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
