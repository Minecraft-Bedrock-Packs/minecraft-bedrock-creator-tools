import JSZip from 'jszip';

/**
 * Creates a .mcpack zip file
 * @param {*} manifest
 * @param {*} structureFiles
 * @param {*} packIcon
 */
export function generateZip(manifest, structureFiles, packIcon) {
	const zip = new JSZip();

	const structureBlockFolder = zip.folder('structures');

	zip.file('manifest.json', JSON.stringify(manifest, null, 2));
	zip.file('pack_icon.png', packIcon, { binary: true });

	for (const file of structureFiles) {
		// @ts-ignore
		structureBlockFolder.file(file.name, file);
	}

	zip.generateAsync({ type: 'blob' }).then((content) => {
		const link = document.createElement('a');
		link.href = URL.createObjectURL(content);
		link.download = 'structureBlock.mcpack';
		link.click();
	});
}

/**
 * Builds a manifest file for a .mcpack
 * @param {JSON} manifest - Json manifest file.
 * @param {string} title
 * @param {string} description
 */
export function buildManifest(manifest, title, description) {
	// @ts-ignore
	manifest.header.name = title;
	// @ts-ignore
	manifest.header.description = description;
	// @ts-ignore
	manifest.header.uuid = crypto.randomUUID();
	// @ts-ignore
	manifest.modules[0].uuid = crypto.randomUUID();

	return manifest;
}
