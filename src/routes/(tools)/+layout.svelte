<script>
	import BackButton from "../../components/BackButton.svelte";
	import "../../app.css";
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-[url('$lib/assets/background.png')] bg-center">
	<BackButton />
	<div class="flex flex-grow flex-col items-center justify-center">
		{@render children()}
	</div>
</div>

<!-- <div class="flex min-h-screen flex-col justify-between p-8 bg-[url('$lib/assets/background.png')] bg-center">
	<BackButton />
	<main class="flex flex-grow flex-col items-center justify-center">
		{@render children()}
	</main>
	<footer class="mt-8 text-center text-sm text-gray-500">
		<a
			href="https://github.com/Minecraft-Bedrock-Packs/minecraft-bedrock-structure-block-pack-generator-website/tree/main"
			target="_blank"
			rel="noopener noreferrer"
		>
			<button class="bg-gray-800 rounded-lg inline-block p-2 shadow-md transition duration-200 hover:underline">View on GitHub</button>
		</a>
	</footer>
</div> -->
