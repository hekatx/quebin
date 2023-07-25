import { getPostBySlug } from "@/lib/posts";
import { ReactNode } from "react";

type Params = {
	slug: string;
};

type Props = {
	params: Params;
};

function Tag({ children }: { children: ReactNode }) {
	return (
		<span className="p-1 bg-zinc-800 text-xs rounded-sm tracking-wider">
			{children}
		</span>
	);
}

export default async function Post({ params }: Props) {
	if (!params.slug) return null;

	const post = await getPostBySlug(params.slug);

	return (
		<section>
			<header className="mb-5">
				<p className="text-sm text-neutral-500">
					<time className="text-neutral-500">{post.date}</time>
				</p>
				<h1 className="font-extrabold text-3xl mb-1">{post.title}</h1>
			</header>

			{post.excerpt ? (
				<div
					className="text-xl mb-10"
					dangerouslySetInnerHTML={{ __html: post.excerpt }}
				/>
			) : null}

			<div
				className="w-[70ch] mx-auto"
				dangerouslySetInnerHTML={{ __html: post.content }}
			/>
		</section>
	);
}
