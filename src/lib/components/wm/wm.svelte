<script lang="ts">
	import Window from './window.svelte';

	interface WindowInterface {
		id?: number | null;
		x: number;
		y: number;
		width: number;
		height: number;
		title: string;
	}

	let windows: Array<WindowInterface> = [];

	windows.push({
		x: 100,
		y: 100,
		width: 400,
		title: 'Tester',
		id: 1
	} as WindowInterface);

	const onWindowMove = ({ top, left, id }) => {
		const target = windows.find((e) => e.id == id);
		target.props.top += top;
		target.props.left += left;

		windows = [...windows.filter((e) => e.id !== id), target];

		focusWindow(id);
	};
</script>

<div class="w-full h-full overflow-hidden">
	{#each windows as window (window.id)}
		<Window {...window}>Hello bear</Window>
	{/each}
</div>
