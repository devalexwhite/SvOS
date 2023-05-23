<script>
	import { onMount } from 'svelte';
	import { FileType } from '../../../lib/sys/FileTypes';
	import { LsDir, loadDir } from '../../../lib/sys/Files';
	import { SessionBus } from '../../../lib/sys/SessionBus';
	import { flush_render_callbacks } from 'svelte/internal';

	export let path = '/';
	let files = [];

	const onResize = () => {};

	const test = () => {
		loadDir();
	};

	const loadFiles = async () => {
		files = await LsDir(path);
	};

	const onOpen = async (file) => {
		if (file.type.name == 'Image') {
			SessionBus.update((bus) => {
				const message = {
					type: 'launch',
					value: 'org.apps.imageviewer',
					params: {
						src: file.fullpath
					}
				};

				return [message, ...bus];
			});
		} else if (file.type.name == 'Document') {
			SessionBus.update((bus) => {
				const message = {
					type: 'launch',
					value: 'org.apps.editor',
					params: {
						data: file.data
					}
				};

				return [message, ...bus];
			});
		}
	};

	onMount(async () => {
		loadFiles();
	});
</script>

<div class="px-2 py-1 overflow-auto" on:resize={onResize}>
	<ul class="flex flex-col">
		{#each files as file}
			<li
				class="relative w-full max-w-full px-2 overflow-hidden rounded-lg even:bg-gray-100"
				id={file.id}
			>
				<button
					class="grid w-full h-8 grid-cols-4 text-base text-left gap-x-4"
					on:click={() => onOpen(file)}
				>
					<div class="flex items-center justify-start h-full col-span-2">
						<div class="relative flex flex-row items-center w-full">
							<div class="flex justify-center w-8 mr-1">
								<svelte:component this={file.type.icon} />
							</div>
							<div
								class="relative block w-full overflow-hidden text-left whitespace-nowrap text-ellipsis"
							>
								{file.name}
							</div>
						</div>
					</div>
					<div class="flex items-center justify-start h-full">
						<div
							class="block overflow-hidden text-left text-gray-600 whitespace-nowrap text-ellipsis"
						>
							{file.type.name}
						</div>
					</div>
					<div class="flex items-center justify-start h-full">
						<div
							class="block overflow-hidden text-left text-gray-600 whitespace-nowrap text-ellipsis"
						>
							{file.size}
						</div>
					</div>
				</button>
			</li>
		{/each}
	</ul>
</div>
