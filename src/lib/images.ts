import fs from "fs";
import { join } from "path";
import { getPlaiceholder } from "plaiceholder";

const assetsDirectory = join(process.cwd(), "public");

export async function getImageFromAssets(src: string) {
	const file = fs.readFileSync(join(assetsDirectory, src));

	const {
		metadata: { height, width },
		...plaiceholder
	} = await getPlaiceholder(file, { size: 10 });

	return {
		...plaiceholder,
		img: { src, height, width },
	};
}

export async function getImageFromURL(url: string) {
	const file = await fetch(url).then(async (blob) =>
		Buffer.from(await blob.arrayBuffer()),
	);

	const {
		metadata: { height, width },
		...plaiceholder
	} = await getPlaiceholder(file, { size: 10 });

	return {
		...plaiceholder,
		img: { src: url, height, width },
	};
}
