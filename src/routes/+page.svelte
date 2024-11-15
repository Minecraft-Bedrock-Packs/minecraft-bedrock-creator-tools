<script lang="ts">
    import {buildManifest, generateZip} from "$lib/builder"
    import manifestJson from "../lib/assets/manifest.json"
    let data: any

    let files

    const handleFileChange = (event) => {
      files = event.target.files
    };
    
    function handleSubmit(event) {
        event.preventDefault()

        console.log(event.target.file[0])
        generateZip(buildManifest(manifestJson), files)
    }
  </script>

<div class="flex-1 flex items-center justify-center">
    <div class="bg-gray-800 items-center p-10 rounded shadow">
    <div>Upload your .mcstructure files and a Minecraft Structure Pack will be generated for you. <br/> Then you will be able to import the pack into your game.</div>
      <form enctype="multipart/form-data" on:submit|preventDefault={handleSubmit}>
        <div>
          <label for="file">Upload your file</label>
          <input
            on:change={handleFileChange}
            type="file"
            id="file"
            name="fileToUpload"
            multiple={true}
            accept=".mcstructure"
            required
            bind:value={data}
          />
        </div>
      
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-full mt-4" type="submit">Submit</button>
      </form>
    </div>
</div>

