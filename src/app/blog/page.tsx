import { getAllPosts } from "@/lib/posts";
import { Posts } from "./posts";

export default async function Blog() {
	const posts = await getAllPosts();

	return (
		<section>
			<h1 className="font-bold text-3xl animate-text">Blog</h1>
			<Posts allPosts={posts} />
		</section>
	);
}
