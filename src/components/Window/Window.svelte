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
	class="rounded border-2 border-light-primary overflow-hidden absolute resize bg-white {active
		? 'shadow-lg  select-none'
		: 'shadow'} {foreground ? 'z-50' : 'z-40'}"
	style="left: {left}px;top: {top}px;width: {width}px;height: {height}px;"
	on:mousedown={() => dispatch('focus')}
>
	<div
		class="flex flex-row items-center justify-between w-full h-8 px-3 cursor-move text-light-primary-contrast bg-light-primary"
		on:mousedown={onDragStart}
	>
		<span class="text-base font-semibold pointer-events-none">
			{title}
		</span>
		<HeaderButtons on:close />
		<!-- <HeaderButtons /> -->
	</div>
	<div class="w-full h-full p-2 bg-light-background">
		<slot />
	</div>
</div>

<svelte:window on:mousemove={onDrag} on:mouseup={onDragEnd} />
