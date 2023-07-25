"use client";

import { Toggle } from "@/components/toggle";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import { ReactNode, useState } from "react";

type Posts = Awaited<ReturnType<typeof getAllPosts>>;

function getUniqueTags(posts: Posts) {
	return Array.from(new Set(posts.flatMap((post) => post.tags)));
}

function formatDate(date: string) {
	return new Date(date).toLocaleDateString(undefined, { dateStyle: "long" });
}

export function Posts({ allPosts }: { allPosts: Posts }) {
	const tags = getUniqueTags(allPosts);
	const [clickedTags, setClickedTags] = useState<string[]>([]);

	function handleToggleTag(tag: string) {
		if (clickedTags.includes(tag)) {
			setClickedTags((prev) => prev.filter((prevTag) => prevTag !== tag));
		} else {
			setClickedTags((prev) => [...prev, tag]);
		}
	}

	const isAnyFilterActive = clickedTags.length > 0;

	const filteredPosts = allPosts.filter((post) =>
		clickedTags.every((tag) => post.tags.includes(tag)),
	);

	const posts = isAnyFilterActive ? filteredPosts : allPosts;

	return (
		<>
			<div className="flex gap-3 my-6">
				{tags.map((tag) => (
					<Toggle
						size="sm"
						variant="default"
						key={tag}
						onPressedChange={() => handleToggleTag(tag)}
						className="animate-text"
					>
						{tag}
					</Toggle>
				))}
			</div>
			<section>
				{posts.map((post) => (
					<Post key={post.title} post={post} />
				))}
			</section>
		</>
	);
}

function Post({ post }: { post: Posts[number] }) {
	const { title, excerpt, date, slug } = post;

	const tags = post.tags as unknown as string[];

	const formatteDate = formatDate(date);
	return (
		<article className="mb-6 animate-text">
			<Link href={`/blog/${slug}`}>
				<h2 className="font-bold text-xl">{title}</h2>
			</Link>
			<p>{excerpt}</p>
			<div className="flex gap-3">
				<time className="text-sm text-neutral-500">{formatteDate}</time>
				<div className="flex gap-3">
					{tags.map((tag) => (
						<Tag key={tag}>{tag}</Tag>
					))}
				</div>
			</div>
		</article>
	);
}

function Tag({ children }: { children: ReactNode }) {
	return (
		<span className="p-1 bg-zinc-800 text-xs rounded-sm tracking-wider">
			{children}
		</span>
	);
}
