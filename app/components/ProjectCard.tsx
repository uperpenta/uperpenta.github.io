import Image from "next/image";

interface ProjectLink {
  type: "github" | "website";
  href: string;
}

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  aspect?: string;
  size?: "large" | "small" | "medium";
  links?: ProjectLink[];
}

export default function ProjectCard({
  number,
  title,
  description,
  tags,
  imageSrc,
  imageAlt,
  aspect = "aspect-video",
  size = "large",
  links = [],
}: ProjectCardProps) {
  const isLarge = size === "large";

  return (
    <article className="group">
      <div
        className={`relative overflow-hidden bg-surface-container-low mb-6 ${isLarge ? "mb-8" : "mb-6"} ${aspect}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-all duration-700 scale-105 group-hover:scale-100"
        />
        {/* Dark overlay that fades on hover */}
        <div className="absolute inset-0 bg-black/60 transition-opacity duration-700 group-hover:opacity-0" />
        <div
          className={`absolute ${isLarge ? "top-8 right-8 text-4xl" : "top-6 right-6 text-3xl"} text-on-surface/20 font-headline z-10`}
        >
          {number}
        </div>
      </div>

      <div
        className={`flex ${isLarge ? "flex-col md:flex-row md:justify-between" : "flex-col"} items-start gap-4`}
      >
        <div className={isLarge ? "max-w-xl" : ""}>
          <h2
            className={`font-headline font-bold uppercase tracking-tighter mb-3 ${isLarge ? "text-2xl md:text-3xl mb-4" : "text-xl"}`}
          >
            {title}
          </h2>
          <p
            className={`leading-relaxed mb-4 ${isLarge ? "text-on-surface/70 mb-6" : "text-on-surface/60 text-sm"}`}
          >
            {description}
          </p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`font-headline uppercase tracking-widest ${
                  isLarge
                    ? "text-[10px] border border-outline-variant px-3 py-1 text-primary-container"
                    : "text-[9px] text-on-surface/40"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {links.length > 0 && (
          <div className="flex items-center gap-4 shrink-0">
            {links.map((link) => (
              <a
                key={link.type}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-container font-headline text-sm tracking-widest hover:translate-x-1 transition-transform duration-300"
              >
                {link.type === "github" ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                )}
                {link.type === "github" ? "GITHUB" : "WEBSITE"}
                <span className="material-symbols-outlined text-sm">
                  arrow_outward
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
