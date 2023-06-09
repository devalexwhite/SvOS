<script>
	export let fill = false;
	export let style;
</script>

<button
	{style}
	class="
  {fill && 'w-full block'} 
  active:saturate-50 transition-all
  px-3 py-1 text-lg font-medium rounded-lg from-light-accent/80 to-light-accent/90 bg-gradient-to-br border-2 border-light-accent text-light-accent-contrast"
>
	<slot />
</button>
