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
	const post = await getPostBySlug(params.slug);

	const tags = post.tags as unknown as string[];

	console.log("sep", post);

	return (
		<section>
			<header className="mb-5">
				<h1 className="font-extrabold text-3xl mb-1">{post.title}</h1>

				<p className="text-sm text-neutral-500">
					Published on <time className="text-neutral-500">{post.date}</time>
					{" |"} Last updated on{" "}
					<time className="text-neutral-500">{post.date}</time>
				</p>

				<ul aria-label="Tags" className="flex gap-3 items-center">
					<li className="text-sm text-neutral-500">Tags: </li>
					{tags.map((tag) => (
						<li key={tag}>
							<Tag key={tag}>{tag}</Tag>
						</li>
					))}
				</ul>
			</header>

			{post.excerpt ? (
				<div
					className="text-xl mb-5"
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
