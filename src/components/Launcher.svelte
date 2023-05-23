<script>
	import { createEventDispatcher } from 'svelte';
	import ComputerIcon from './Icons/ComputerIcon.svelte';
	import CalculatorIcon from './Icons/CalculatorIcon.svelte';

	const dispatch = createEventDispatcher();

	const applications = [
		{
			name: 'Files',
			path: './Applications/FileManager/Application.svelte',
			icon: ComputerIcon
		},
		{
			name: 'Calculator',
			path: './Applications/Calculator/Application.svelte',
			icon: CalculatorIcon,
			options: {
				width: 300,
				height: 400
			}
		}
	];

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
