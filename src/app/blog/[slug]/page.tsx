import { getPostBySlug, getPostSlugs } from "@/lib/posts";

type Params = {
	slug: string;
};

type Props = {
	params: Params;
};

export async function generateStaticParams() {
	const posts = getPostSlugs();

	return posts.map((post) => ({
		slug: post.replace(".md", "").replaceAll(".txt", ""),
	}));
}

export default async function Post({ params }: Props) {
	if (!params.slug) return null;

	const post = await getPostBySlug(params.slug);

	return (
		<section>
			<header className="mb-5 text-center">
				<p className="text-xs text-neutral-500">
					<time className="text-neutral-500">{post.date}</time>
				</p>
				<h1 className="font-extrabold text-5xl mb-12">{post.title}</h1>
			</header>

			<div
				className="max-w-[70ch] mx-auto"
				dangerouslySetInnerHTML={{ __html: post.content }}
			/>
		</section>
	);
}
