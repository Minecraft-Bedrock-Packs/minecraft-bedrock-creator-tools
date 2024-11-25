<script>
    import manifestJson from '../../../lib/assets/manifest.json';
    import JsonBlock from '../../../components/JsonBlock.svelte';
    import skinPackManifest from '../../../lib/assets/manifestGenerator/skinpack.json'
    import behaviorPackManifest from '../../../lib/assets/manifestGenerator/behaviorPack.json'
    import resourcePackManifest from '../../../lib/assets/manifestGenerator/resourcePack.json'
    import worldTemplateManifest from '../../../lib/assets/manifestGenerator/worldTemplate.json'

    let manifestOptions = $state([
        {id: 1, label: "Skin Pack", checked: false},
        {id: 2, label: "Resource Pack", checked: false},
        {id: 3, label: "Behavior Pack", checked: false},
        {id: 4, label: "World Template", checked: false}
    ]);

    let isAnyChecked = $derived(manifestOptions.some(option => option.checked));

    let codeText = $state("");

    function handleCheckboxChange(event, id) {
        console.log(id)
        if (id === 1) {
            codeText = JSON.stringify(skinPackManifest, undefined, 2);
        } else if (id === 2){
            codeText = JSON.stringify(resourcePackManifest, undefined, 2);
        } else if (id === 3) {
            codeText = JSON.stringify(behaviorPackManifest, undefined, 2);
        } else if (id === 4) {
            codeText = JSON.stringify(worldTemplateManifest, undefined, 2);
        }
    } 
</script>

<svelte:head>
	<title>Minecraft Bedrock Manifest Generator</title>
	<meta name="description" content="Generates the manifest file for Minecraft Bedrock Addons." />
</svelte:head>

<div class="items-center justify-center text-white bg-gray-800 p-10">
    <h1 class="text-center text-3xl">Manifest Generator</h1>
    <div class="grid grid-cols-2 gap-2">
        <form>
            {#each manifestOptions as option}
              <div>
                <input
                  type="checkbox"
                  id={option.id}
                  onchange={(e) => handleCheckboxChange(e, option.id)}
                  bind:checked={option.checked}
                  disabled={isAnyChecked && !option.checked}
                />
                <label for={option.id}>{option.label}</label>
              </div>
            {/each}
          </form>
        <JsonBlock json={codeText} class="text-black"/>
    </div>
</div>