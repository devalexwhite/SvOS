<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const onCloseClick = () => dispatch('close');
</script>

<div class="flex flex-row items-start justify-end h-full">
	<button
		class="flex items-center justify-center w-10 h-5 overflow-hidden text-sm transition-all border-b border-l border-r border-gray-500 rounded-bl bg-white/30 hover:opacity-100 hover:bg-green-400"
		>-</button
	>
	<button
		class="flex items-center justify-center w-10 h-5 overflow-hidden text-sm transition-all border-b border-r border-gray-500 rounded-br bg-white/30 hover:opacity-100 hover:bg-red-400"
		on:click={onCloseClick}>x</button
	>
</div>
