<script>
	import 'bytemd/dist/index.css';

	import { Editor } from 'bytemd';
	import { onMount } from 'svelte';
	export let data;
</script>

<div class="w-full h-full">
	<Editor value={data} />
</div>
