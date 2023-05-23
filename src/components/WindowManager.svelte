<script type="mjs">
	import Launcher from './Launcher.svelte';
	import Window from './Window/Window.svelte';

	let windows = [];
	let active = null;

	const createWindow = ({
		title = 'NO TITLE',
		x = 100,
		y = 100,
		width = 600,
		height = 400,
		application
	}) => {
		const window = {
			id: windows.length,
			props: {
				title,
				left: x,
				top: y,
				width,
				height,
				foreground: true
			},
			application
		};

		focusWindow(null);

		windows = [window, ...windows];
	};

	const onWindowMove = ({ top, left, id }) => {
		const target = windows.find((e) => e.id == id);
		target.props.top += top;
		target.props.left += left;

		windows = [...windows.filter((e) => e.id !== id), target];

		focusWindow(id);
	};

	const focusWindow = (id) => {
		const windowsCopy = Object.assign(windows, {});
		windowsCopy.forEach((window) => {
			if (window.id == id) window.props.foreground = true;
			else window.props.foreground = false;
		});

		windows = windowsCopy;
	};

	const onLaunch = async (app) => {
		const application = (await import(app.path)).default;

		createWindow({
			title: app.name,
			application,
			...app.options
		});
	};

	const onCloseWindow = (id) => {
		windows = windows.filter((i) => i.id !== id);
	};
</script>

<div class="relative w-full h-full overflow-hidden">
	<Launcher on:launch={(e) => onLaunch(e.detail)} />
	{#each windows as window (window.id)}
		<Window
			active={active === window.id}
			on:move={(e) => onWindowMove({ id: window.id, ...e.detail })}
			on:startmove={() => (active = window.id)}
			on:endmove={() => (active = null)}
			on:close={() => onCloseWindow(window.id)}
			on:focus={() => {
				if (!window.props.foreground) focusWindow(window.id);
			}}
			{...window.props}
		>
			<svelte:component this={window.application} />
		</Window>
	{/each}
</div>
