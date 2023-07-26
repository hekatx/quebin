import fs from "fs";
import { join } from "path";
import { getPlaiceholder } from "plaiceholder";

const assetsDirectory = join(process.cwd(), "public");

export async function getImage(src: string) {
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
