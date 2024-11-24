<script>
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-[url('$lib/assets/background.png')]">
	{@render children()}
</div>
