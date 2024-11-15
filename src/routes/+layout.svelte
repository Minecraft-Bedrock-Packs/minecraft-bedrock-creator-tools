<script>
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen bg-cover bg-center bg-[url('$lib/assets/background.png')]">
		 {@render children()}
</div>
