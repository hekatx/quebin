import { InTextLink } from "@/components/inTextLink";
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

const currentEmployer = {
  url: "www.capgemini.com",
  name: "Capgemini",
};

export default function Home() {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-10">
      <div className="order-2 md:order-1 w-full flex flex-col justify-center">
        <h1
          className="animate-text font-semibold text-3xl mb-10"
          style={{ "--stagger": 0 } as React.CSSProperties}
        >
          Hey!
        </h1>
        <div className="grid gap-5">
          <p
            style={{ "--stagger": 1 } as React.CSSProperties}
            className="animate-text"
          >
            I’m Kevin Gonzalez, a Front-end Engineer interested in designing
            interfaces that resonate with users. Dedicated to precision, polish,
            and diverse creative pursuits.
          </p>
          <p
            style={{ "--stagger": 2 } as React.CSSProperties}
            className="animate-text"
          >
            As well as <InTextLink href="/craft">coding</InTextLink>, you can
            find me <InTextLink href="/art">painting</InTextLink> and{" "}
            <InTextLink href="/blog">writing</InTextLink> my ideas about design,
            code and art.
          </p>
          <p
            style={{ "--stagger": 3 } as React.CSSProperties}
            className="animate-text"
          >
            Currently crafting interfaces at{" "}
            <InTextLink href={currentEmployer.url}>
              {currentEmployer.name}
            </InTextLink>
          </p>
        </div>
      </div>
      <div className="order-1 md:order-2 overflow-hidden w-full">
        <div style={blurredImage} />
      </div>
    </section>
  );
}
