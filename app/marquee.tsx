import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const projects = [
  {
    name: "GC System",
    code: "Gift Check",
    description:
      "A system for managing and tracking issued gift checks efficiently.",
    img: "/images/giftcheck.png",
  },
  {
    name: "NESA",
    code: "Near Expiry Stock",
    description:
      "Helps monitor near-expiry stocks to reduce losses and ensure proper stock rotation.",
    img: "/images/nesa.png",
  },
  {
    name: "BO System",
    code: "Bad Order",
    description:
      "Automates handling and monitoring of returned or damaged items for better inventory control.",
    img: "/images/bo.png",
  },
  {
    name: "SWA",
    code: "Stock Withdrawal Advice",
    description: "Streamlines stock withdrawal processes.",
    img: "/images/swa.png",
  },
  {
    name: "AR System",
    code: "Account Receivable",
    description:
      "Simplifies invoice tracking and payment collection for business units.",
    img: "/images/ar.png",
  },
];

const firstRow = projects.slice(0, Math.ceil(projects.length / 2));
const secondRow = projects.slice(Math.ceil(projects.length / 2));

const ProjectCard = ({
  img,
  name,
  code,
  description,
}: {
  img: string;
  name: string;
  code: string;
  description: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border border-gray-800/40 bg-slate-900/60 p-4 backdrop-blur-md shadow-md transition-all hover:scale-[1.03] hover:bg-slate-800/60"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Image
          className="rounded-lg border border-gray-700/40"
          width="80"
          height="60"
          alt={name}
          src={img}
          priority
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-400">{code}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm text-gray-300">
        {description}
      </blockquote>
    </figure>
  );
};

export function MarqueeComponent() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
      {/* subtle overlay to match dark background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/80" />
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s] mt-6">
        {secondRow.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </Marquee>
      {/* gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-slate-950 via-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-slate-950 via-transparent"></div>
    </div>
  );
}
