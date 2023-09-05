<script>
	import { onMount } from 'svelte';
	import { LsDir } from '../../../lib/sys/Files';
	import { SessionBus } from '../../../lib/sys/SessionBus';

	let path = 'fs';
	let files = [];

	const onResize = () => {};

	const loadFiles = async (dir) => {
		files = await LsDir(dir);
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
		} else if (file.type.name == 'Folder') {
			path += `/${file.name}`;
			files = await LsDir(path);
		}
	};

	const setPath = (segmentIndex) => {
		const segments = path.split("/")
		let final = "";

		for (var i = 0; i <= segmentIndex; i++) {
			final += segments[i]
			if (i < segmentIndex) final += "/"
		}


		path = final
		loadFiles(final)
	}

	onMount(async () => {
		await loadFiles(path);
	});
</script>

<div class="overflow-auto" on:resize={onResize}>
	<div class="w-full py-2 border-b border-gray-200 px-3">
		<ul class="flex flex-row w-full space-x-3">
			{#each path.split("/") as segment,i}
				<li class={`rounded-lg hover:bg-blue-200 px-2 py-1 text-sm ${i == path.split("/").length - 1 ? "bg-blue-400 text-white" : "text-gray-700"}`}>
					<button on:click={() => setPath(i)} class="w-full h-full">
						{#if segment == "fs"}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" ></path></svg>
						{:else}
							{segment}
						{/if}
					</button>
				</li>
			{/each}
		</ul>
	</div>
	<ul class="flex flex-col px-2 py-3">
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
							<div class="flex justify-center h-4 mr-1">
								<img src={file.type.icon} width="20" height="20" />
							</div>
							<div
								class="relative block w-full overflow-hidden text-left whitespace-nowrap text-ellipsis"
							>
								{file.name}
							</div>
						</div>
					</div>
					<div class="flex items-center justify-end h-full">
						<div
							class="block overflow-hidden text-right text-gray-600 whitespace-nowrap text-ellipsis"
						>
							{file.type.name}
						</div>
					</div>
					<div class="flex items-center justify-end h-full">
						<div
							class="block overflow-hidden text-right text-gray-600 whitespace-nowrap text-ellipsis"
						>
							{file.size}
						</div>
					</div>
				</button>
			</li>
		{/each}
	</ul>
</div>
