<script type="mjs">
	import { ApplicationByID } from '../lib/sys/Application';
	import { SessionBus } from '../lib/sys/SessionBus';
	import Launcher from './Launcher.svelte';
	import Window from './Window/Window.svelte';

	let windows = [];
	let active = null;
	let windowCount = 0;

	const createWindow = ({
		title = 'NO TITLE',
		x = 100,
		y = 100,
		width = 600,
		height = 400,
		params = {},
		application
	}) => {
		const window = {
			id: windowCount,
			props: {
				title,
				left: x,
				top: y,
				width,
				height,
				foreground: true
			},
			params,
			application
		};
		windowCount += 1;

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

	const onLaunch = async (application, params = {}) => {
		const appData = await application.appData();
		createWindow({
			appId: application.id,
			title: application.name,
			application: appData.default,
			params,
			...application.options
		});
	};

	const onCloseWindow = (id) => {
		windows = windows.filter((i) => i.id !== id);
	};

	SessionBus.subscribe((bus) => {
		if (bus.length && bus[0].type == 'launch') {
			const message = bus.shift();

			const application = ApplicationByID(message.value);

			onLaunch(application, message?.params);
			SessionBus.set(bus);
		}
	});
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
			<svelte:component this={window.application} {...window.params} />
		</Window>
	{/each}
</div>
