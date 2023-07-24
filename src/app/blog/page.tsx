import { getAllPosts } from "@/lib/posts";
import { Posts } from "./posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <section>
      <h1 className="font-bold text-3xl animate-text">Blog</h1>
      <Posts allPosts={posts} />
    </section>
  );
}
