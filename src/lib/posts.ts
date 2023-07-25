import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
//@ts-ignore
import addClass from "rehype-add-classes";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";

export const postStyles = {
	p: "mb-5",
	h2: "text-xl font-bold mb-5 mt-10",
};

const commonFields = [
	"title",
	"date",
	"tags",
	"coverImage",
	"excerpt",
	"slug",
	"content",
];

const postsDirectory = join(process.cwd(), "_posts");

type Items = {
	[key: string]: string;
};

function formatDate(date: string) {
	return new Date(date).toLocaleDateString(undefined, { dateStyle: "long" });
}

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(
	slug: string,
	fields: string[] = commonFields,
) {
	const realSlug = slug.replace(/\.md$/, "").replace(/\.txt$/, "");
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	const items: Items = {};

	fields.forEach(async (field) => {
		if (field === "slug") {
			items[field] = data.slug;
		}
		if (field === "content") {
			const parsedContent = await unified()
				.use(remarkParse)
				.use(remarkRehype)
				.use(rehypeFormat)
				.use(addClass, postStyles)
				.use(rehypeStringify)
				.process(content);
			items[field] = String(parsedContent);
		}
		if (field === "date") {
			items[field] = formatDate(data.date);
			return;
		}

		if (typeof data[field] !== "undefined") {
			items[field] = data[field];
		}
	});

	return items;
}

export async function getAllPosts(fields: string[] = commonFields) {
	const slugs = getPostSlugs();
	const posts = await Promise.all(
		slugs.map(async (slug) => {
			const post = await getPostBySlug(slug, fields);
			return post;
		}),
	);

	return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

export async function getPostsByTag(
	tags: string[],
	fields: string[] = commonFields,
) {
	const posts = await getAllPosts(fields);

	// Expensive but is the fastest way I could think of lol
	const postsByTag = posts.filter((post) =>
		tags.every((tag) => post.tags.includes(tag)),
	);

	return postsByTag;
}
