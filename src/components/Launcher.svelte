<script>
	import { createEventDispatcher } from 'svelte';
	import { ApplicationByID } from '../lib/sys/Application';
	import Taskbar from './Taskbar.svelte';
	import { getIconPath } from '../lib/sys/IconResolver';

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
				<img
					src={getIconPath(app.icon.category, app.icon.name)}
					width="32"
					height="32"
					alt="Icon"
				/>
			</span>
			<span
				class="p-1 text-sm font-light font-semibold text-center text-white rounded-lg text-shadow max-w-16 wrap-break group-hover:bg-blue-600"
				>{app.name}</span
			>
		</button>
	{/each}
</div>

<style type="text/css">
	.text-shadow {
		text-shadow: 1px 1px 4px black;
	}
</style>
