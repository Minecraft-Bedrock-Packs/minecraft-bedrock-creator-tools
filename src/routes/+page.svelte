<svelte:head>
	<title>Minecraft Bedrock Creator Tools</title>
</svelte:head>

<div class="flex min-h-screen flex-col bg-[url('$lib/assets/background.png')] bg-center">
	<div class="flex flex-grow flex-col items-center justify-center">
		<main>
			<div class="items-center justify-center rounded bg-gray-800 p-10 text-center shadow">
				<h1 class="text-white">
					I built these tools because I got annoyed when creating Minecraft Bedrock addons.
				</h1>
				<div class="mt-4"></div>
				<a href="/structureblock" class="text-blue-500 hover:underline"
					>Structure Block Pack Generator</a
				>
				<br />
				<a href="/manifestgenerator" class="text-blue-500 hover:underline">Manifest Generator</a>
			</div>
		</main>
	</div>
	<footer class="mt-8 pb-4 text-center text-sm text-gray-500">
		<a
			href="https://github.com/Minecraft-Bedrock-Packs/minecraft-bedrock-structure-block-pack-generator-website/tree/main"
			target="_blank"
			rel="noopener noreferrer"
		>
			<button
				class="inline-block rounded-lg bg-gray-800 p-2 shadow-md transition duration-200 hover:underline"
				>View on GitHub</button
			>
		</a>
	</footer>
</div>
