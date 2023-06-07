<script>
	import ButtonContained from '../../UADS/Button/ButtonContained.svelte';
	import ButtonOutlined from '../../UADS/Button/ButtonOutlined.svelte';
</script>

<div class="w-full h-full bg-white">
	<h1>UADS Viewer</h1>
	<p class="mb-3">Component library for the Unified Application Design System (UADS).</p>

	<h5 class="mt-4">Color palette</h5>
	<div class="flex flex-row space-x-4">
		<div>
			<h6 class="mb-1">Light/Primary</h6>
			<div class="w-16 h-16 border border-black rounded-lg bg-light-primary" />
		</div>
		<div>
			<h6 class="mb-1">Light/Primary/Contrast</h6>
			<div class="w-16 h-16 border border-black rounded-lg bg-light-primary-contrast" />
		</div>
		<div>
			<h6 class="mb-1">Light/Accent</h6>
			<div class="w-16 h-16 border border-black rounded-lg bg-light-accent" />
		</div>
		<div>
			<h6 class="mb-1">Light/Accent/Contrast</h6>
			<div class="w-16 h-16 border border-black rounded-lg bg-light-accent-contrast" />
		</div>
	</div>

	<h5 class="mt-4">Typography</h5>
	<div class="flex flex-col space-x-2">
		<div><h1>Header 1</h1></div>
		<div><h2>Header 2</h2></div>
		<div><h3>Header 3</h3></div>
		<div><h4>Header 4</h4></div>
		<div><h5>Header 5</h5></div>
		<div><h6>Header 6</h6></div>
		<div><p>Paragraph</p></div>
	</div>

	<h5 class="mt-4">Buttons</h5>
	<div class="flex flex-row space-x-4">
		<div>
			<h6 class="mb-1">Contained</h6>
			<ButtonContained>Test Button</ButtonContained>
		</div>
		<div>
			<h6 class="mb-1">Outlined</h6>
			<ButtonOutlined>Test Button</ButtonOutlined>
		</div>
	</div>
</div>
