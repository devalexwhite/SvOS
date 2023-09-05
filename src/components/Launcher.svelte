<script>
	import { createEventDispatcher } from 'svelte';
	import { ApplicationByID } from '../lib/sys/Application';
	import Taskbar from './Taskbar.svelte';

	const dispatch = createEventDispatcher();

	const applications = [
		ApplicationByID('org.apps.files'),
		ApplicationByID('org.apps.calc'),
		ApplicationByID('org.apps.uadsviewer')
	];

	const onLaunch = (application) => {
		dispatch('launch', application);
	};
</script>

<div
	class="z-10 flex flex-col w-full h-full gap-6 p-8 bg-cover"
	style="background-image: url('/fs/wallpapers/japan.jpg')"
>
	<Taskbar />
	{#each applications as app}
		<button
			class="flex flex-col items-center justify-center w-16 h-16 gap-1 p-1 rounded-lg group"
			on:click={() => onLaunch(app)}
		>
			<span class="text-white">
				<svelte:component this={app.icon} />			
			</span>
			<span class="text-sm font-light text-center text-white text-shadow font-semibold max-w-16 wrap-break p-1 group-hover:bg-blue-600 rounded-lg">{app.name}</span>
		</button>
	{/each}
</div>

<style type="text/css">
	.text-shadow {
		text-shadow: 1px 1px 4px black;
	}
</style>
