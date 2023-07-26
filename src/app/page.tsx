import { BlurredImage } from "@/components/blurredImage";
import { InTextLink } from "@/components/inTextLink";
import { getImage } from "@/lib/images";

const currentEmployer = {
	url: "https://www.capgemini.com/",
	name: "Capgemini",
};

export default async function Home() {
	const heroImage = await getImage("self.png");

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
						<InTextLink passHref={true} href={currentEmployer.url}>
							{currentEmployer.name}
						</InTextLink>
					</p>
				</div>
			</div>
			<div className="rounded-xl border-gray-50 order-1 md:order-2 overflow-hidden w-full h-72 md:h-auto block">
				<BlurredImage
					alt="hola"
					placeholder={heroImage.css}
					{...heroImage.img}
					variant="blur-down"
				/>
			</div>
		</section>
	);
}
