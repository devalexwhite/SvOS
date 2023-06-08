<script>
	export let fill = false;
	export let style;
</script>

<button
	{style}
	class="
  {fill && 'w-full block'} 
  active:saturate-50 transition-all
  px-3 py-1 text-lg font-medium rounded-lg from-light-primary/30 to-light-primary/40 bg-gradient-to-r border-2 border-light-primary text-light-primary-contrast"
>
	<slot />
</button>
