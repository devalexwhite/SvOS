<script>
	import { FileType } from '../../../lib/sys/FileTypes';

	export let files = [
		{
			id: 1,
			name: 'file.xls',
			size: 1203,
			kind: FileType.pdf
		},
		{
			id: 2,
			name: 'Second example but it is longer.pdf',
			size: 9322,
			kind: FileType.spreadsheet
		},
		{
			id: 3,
			name: 'resume.pdf',
			size: 9322,
			kind: FileType.document
		}
	];

	const onResize = () => {};
</script>

<div class="px-2 py-1 overflow-auto" on:resize={onResize}>
	<ul class="flex flex-col">
		{#each files as file}
			<li
				class="relative w-full max-w-full px-2 overflow-hidden rounded-lg even:bg-gray-100"
				id={file.id}
			>
				<button class="grid w-full h-8 grid-cols-4 text-base text-left gap-x-4">
					<div class="flex items-center justify-start h-full col-span-2">
						<div class="relative flex flex-row items-center">
							<div class="mr-1">
								<svelte:component this={file.kind.icon} />
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
							{file.kind.name}
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
