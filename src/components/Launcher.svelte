<script>
	import { createEventDispatcher } from 'svelte';
	import { ApplicationByID } from '../lib/sys/Application';

	const dispatch = createEventDispatcher();

	const applications = [ApplicationByID('org.apps.files'), ApplicationByID('org.apps.calc')];

	const onLaunch = (application) => {
		dispatch('launch', application);
	};
</script>

<div class="z-10 flex flex-col w-full h-full gap-6 p-8">
	{#each applications as app}
		<button
			class="flex flex-col items-center justify-center w-16 h-16 gap-1 p-1 rounded-lg hover:ring-2 ring-offset-1"
			on:click={() => onLaunch(app)}
		>
			<svelte:component this={app.icon} />
			<span class="text-sm font-light text-center text-gray-500">{app.name}</span>
		</button>
	{/each}
</div>
