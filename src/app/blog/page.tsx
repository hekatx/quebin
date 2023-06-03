const tags = ["Typescript", "React", "UI", "Art", "CSS", "Graphics"];

export default function Blog() {
  return (
    <section>
      <h1 className="font-bold text-3xl">Blog</h1>
      <div>
        <ul>{tags.map((tag) => tag)}</ul>
      </div>
    </section>
  );
}
