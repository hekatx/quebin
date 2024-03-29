import Image from "next/image";
import Link from "next/link";
import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

export function DateFormatter({ dateString }: Props) {
  const date = parseISO(dateString);
  return (
    <time className="text-slate-400" dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}

type Items = {
  [key: string]: string;
};

export function PostPreview({ post }: { post: Items }) {
  return (
    <div className="w-full mx-auto group">
      <Link href={`/posts/${post.slug}`}>
        {post?.coverImage && (
          <Image
            alt={`cover image for ${post.title}`}
            src={post.coverImage}
            width={400}
            height={400}
            style={{ width: "100%" }}
          />
        )}
        <div className="mt-4 space-y-2">
          <p className="font-semibold text-xl group-hover:underline">
            {post.title}
          </p>
          <DateFormatter dateString={post.date} />
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </div>
  );
}
