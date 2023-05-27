import Link from "next/link";

const blurredImage = {
  width: 300,
  height: 600,
  filter: "blur(1.5rem)",
  transform: "scale(1.2)",
  backgroundImage:
    "linear-gradient(90deg, rgb(206,204,193) 33.33333333333333%,rgb(185,182,177) 33.33333333333333% 66.66666666666666%,rgb(208,206,201) 66.66666666666666% 100%),linear-gradient(90deg, rgb(139,133,125) 33.33333333333333%,rgb(84,56,40) 33.33333333333333% 66.66666666666666%,rgb(206,196,185) 66.66666666666666% 100%),linear-gradient(90deg, rgb(143,129,117) 33.33333333333333%,rgb(138,86,51) 33.33333333333333% 66.66666666666666%,rgb(186,172,156) 66.66666666666666% 100%),linear-gradient(90deg, rgb(82,63,52) 33.33333333333333%,rgb(153,103,61) 33.33333333333333% 66.66666666666666%,rgb(105,94,77) 66.66666666666666% 100%)",
  backgroundPosition: "0 0 ,0 33.33333333333333%,0 66.66666666666666%,0 100%",
  backgroundSize: "100% 25%",
  backgroundRepeat: "no-repeat",
};

export default function Home() {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-20">
      <div className="order-2 md:order-1 w-full flex flex-col justify-center">
        <h1 className="font-semibold text-3xl mb-10">Hey!</h1>
        <div className="grid gap-5">
          <p>
            I’m Kevin. Interested in designing interfaces that resonate with
            users. Dedicated to precision, polish, and diverse creative
            pursuits.
          </p>
          <p>
            As well as <Link href="/craft">coding</Link>, you can find me{" "}
            <Link href="/art">painting</Link> and{" "}
            <Link href="/blog">writing</Link> my ideas about design, code and
            art.
          </p>
          <p>
            Currently <strong>crafting magical interfaces</strong> at{" "}
            <strong>Capgemini</strong>
          </p>
        </div>
      </div>
      <div className="order-1 md:order-2 overflow-hidden w-full">
        <div style={blurredImage} />
      </div>
    </section>
  );
}
