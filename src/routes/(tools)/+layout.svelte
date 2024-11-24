<script>
    import BackButton from "../../components/BackButton.svelte";
    import "../../app.css"
    let { children } = $props();
</script>

<div class="flex min-h-screen flex-col justify-between p-8 font-[family-name:var(--font-geist-sans)] sm:p-20">
    <BackButton />
    <main class="flex flex-grow flex-col items-center justify-center">
        {@render children()}
    </main>
    <footer class="mt-8 text-center text-sm text-gray-500">
      <a
        href="https://github.com/t3dotgg/quickpic"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:underline"
      >
        View on GitHub
      </a>
    </footer>
  </div>