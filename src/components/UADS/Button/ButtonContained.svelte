<script>
	export let fill = false;
	export let style;
</script>

<button
	{style}
	class="
  {fill && 'w-full block'} 
  active:saturate-50 transition-all
  px-3 py-1 text-lg font-medium rounded-lg bg-light-primary border-2 border-light-primary text-light-primary-contrast"
>
	<slot />
</button>
