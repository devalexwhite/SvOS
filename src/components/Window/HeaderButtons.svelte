<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const onCloseClick = () => dispatch('close');
</script>

<div class="flex flex-row items-center justify-end h-full pl-2 space-x-2">
	<button
		class="flex items-center justify-center w-4 h-4 overflow-hidden text-sm transition-all bg-green-400 rounded-full hover:bg-green-500"
		>-</button
	>
	<button
		class="flex items-center justify-center w-4 h-4 overflow-hidden text-sm transition-all bg-red-400 rounded-full hover:bg-red-500"
		on:click={onCloseClick}>X</button
	>
</div>
