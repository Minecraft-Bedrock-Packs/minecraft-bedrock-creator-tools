<script lang="ts">
    import {buildManifest, generateZip} from "$lib/builder"
    import manifestJson from "../../../lib/assets/manifest.json"
  
    let files

    const handleFileChange = (event) => {
      files = event.target.files
    };
    
    function handleSubmit(event) {
        event.preventDefault()
        generateZip(buildManifest(manifestJson, event.target.title.value, event.target.description.value), files)
    }
  </script>

<svelte:head>
	<title>Minecraft Bedrock Structure Pack Generator</title>
	<meta name="description" content="Generates .mcpacks for Minecraft Bedrock structures created from the structure block." />
</svelte:head>

<div class="items-center justify-center text-white">
    <div class="bg-gray-800 items-center p-10 rounded shadow">
    <h1 class="text-3xl text-center">Minecraft Bedrock Structure Pack Generator</h1> <br> <br>
    <div>Upload your .mcstructure files and a Minecraft Structure Pack will be generated for you. <br> 
      Then you will be able to import the pack into your game.</div> <br>
      <form enctype="multipart/form-data" on:submit|preventDefault={handleSubmit}>
        <div>
          <label for="title">Pack Title</label><br>
          <input class="text-black" type="text" id="title" name="title" value="Minecraft Bedrock Structure Pack"> <br>
          <label for="description">Pack Description</label><br>
          <input class="text-black" type="text" id="description" name="description" value="Custom Minecraft Bedrock Structures"><br><br>
          <label for="file">Upload your file</label>
          <input
            on:change={handleFileChange}
            type="file"
            id="file"
            name="fileToUpload"
            multiple={true}
            accept=".mcstructure"
            required
          />
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-full mt-4" type="submit">Submit</button>
      </form>
    </div>
</div>

