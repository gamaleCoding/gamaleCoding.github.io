import { IconCloud } from "@/components/ui/icon-cloud";

const techStacks = [
  // Frontend
  "html5",
  "css3",
  "javascript",
  "typescript",
  "vue.js",
  "react",
  "tailwindcss",
  "bootstrap",

  // Backend
  "php",
  "laravel",
  "node.js",
  "next.js",

  // Database
  "mysql",
  "mariadb",

  // Tools & DevOps
  "github",
  "nginx",
  "laragon",
  "visualstudiocode",
];

export function IconCloudComponent() {
  const icons = techStacks.map(
    (slug) => `https://cdn.simpleicons.org/${slug.replace(".", "")}`
  );

  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      {/* subtle background blur for glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-purple-950/30 to-slate-900/80 opacity-60 blur-3xl" />
      <div className="relative z-10 scale-125 sm:scale-150 md:scale-175 lg:scale-150 mb-15">
        <IconCloud images={icons} />
      </div>
    </div>
  );
}
