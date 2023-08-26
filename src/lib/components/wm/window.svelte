<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import './style.css';

	export let x: number = 1;
	export let y: number = 1;
	export let width: number = 100;
	export let height: number = 200;
	export let title: string = 'Window';

	const dispatch = createEventDispatcher();

	const onDragStart = (e) => {
		dispatch('startmove');
	};

	const onDrag = (e) => {
		e.preventDefault();
		dispatch('move', { top: e.movementY, left: e.movementX });
	};

	const onDragEnd = (e) => {
		e.preventDefault();
		dispatch('endmove');
	};
</script>

<div class="window" style={`top: ${x}px;left: ${y}px;width: ${width}px;height: ${height}px;`}>
	<div class="titlebar" on:mousedown={onDragStart}><slot name="titlebar">{title}</slot></div>

	<slot />
</div>

<svelte:window on:mousemove={onDrag} on:mouseup={onDragEnd} />
