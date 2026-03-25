const footerLinks = [
  { label: "GITHUB", href: "https://github.com/uperpenta" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/rares-andrei-ialomiteanu-269988251/" },
  { label: "EMAIL", href: "mailto:i.raresandrei@yahoo.com" },
];

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center gap-4 border-t border-outline-variant/20 bg-surface py-20">
      <div className="flex gap-8 md:gap-12 mb-4">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="font-headline text-[10px] tracking-widest text-on-surface/40 hover:text-on-surface transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="font-headline text-[10px] tracking-widest text-on-surface/40">
        &copy;2026 RARES-ANDREI IALOMITEANU
      </p>
    </footer>
  );
}
