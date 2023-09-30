function Item() {
  return (
    <article className="w-full flex justify-center">
      <div className="relative overflow-hidden readable-text rounded-xl border-zinc-600 border max-w-max">
        <video
          muted
          playsInline
          autoPlay
          loop
          height="280"
          src="http://techslides.com/demos/sample-videos/small.mp4"
        />

        <div className="flex justify-between absolute w-full bottom-2 z-10">
          <p className="ml-2 text-white">Provisional title</p>
          <p className="mr-2 text-white">Jan 2023</p>
        </div>
      </div>
    </article>
  );
}

const arr = [1, 2, 3, 4, 5];

export default async function Craft() {
  return (
    <section>
      <h1 className="font-bold text-3xl animate-text mb-5">Craft</h1>
      <section className="gap-10 grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))]">
        {arr.map((_, i) => (
          <Item key={i} />
        ))}
      </section>
    </section>
  );
}
