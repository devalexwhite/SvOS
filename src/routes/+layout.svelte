<script>
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	:global(h1) {
		@apply text-3xl font-medium;
	}
	:global(h2) {
		@apply text-2xl font-medium;
	}
	:global(h3) {
		@apply text-2xl font-normal;
	}
	:global(h4) {
		@apply text-xl font-normal;
	}
	:global(h5) {
		@apply text-lg font-medium;
	}
	:global(h6) {
		@apply text-sm font-medium;
	}
	:global(p) {
		@apply text-base font-normal;
	}
</style>
