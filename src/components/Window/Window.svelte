<script>
	import { createEventDispatcher } from 'svelte';
	import HeaderButtons from './HeaderButtons.svelte';

	export let top = 0;
	export let left = 0;
	export let width = 0;
	export let height = 0;
	export let title = 'Files';
	export let active = true;
	export let foreground = false;

	let dragging = false;

	const dispatch = createEventDispatcher();

	const onDragStart = (e) => {
		dispatch('startmove');
	};

	const onDrag = (e) => {
		if (active) {
			e.preventDefault();
			dispatch('move', { top: e.movementY, left: e.movementX });
		}
	};

	const onDragEnd = (e) => {
		if (active) {
			e.preventDefault();
			dispatch('endmove');
		}
	};
</script>

<div
	class="rounded border-2 flex flex-col border-light-primary absolute resize overflow-hidden {active
		? 'shadow-lg  select-none'
		: 'shadow'} {foreground ? 'z-50' : 'z-40'}"
	style="left: {left}px;top: {top}px;width: {width}px;height: {height}px;"
	on:mousedown={() => dispatch('focus')}
>
	<div class="relative w-full h-8 cursor-move" on:mousedown={onDragStart}>
		<div
			class="absolute top-0 left-0 z-10 w-full h-full text-light-primary-contrast bg-light-primary/30 backdrop-blur"
		/>
		<div
			class="absolute top-0 left-0 z-20 flex flex-row items-center justify-end w-full h-full px-2 opacity-100"
		>
			<slot name="actions" />
			<HeaderButtons on:close />
		</div>
		<!-- <HeaderButtons /> -->
	</div>
	<div class="relative flex-1 w-full overflow-auto bg-light-background">
		<slot />
	</div>
</div>

<svelte:window on:mousemove={onDrag} on:mouseup={onDragEnd} />
