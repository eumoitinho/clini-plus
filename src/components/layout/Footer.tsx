import Link from "next/link";

const links = [
  { label: "Termos de Uso", href: "/termos" },
  { label: "Política de Privacidade", href: "/privacidade" },
  { label: "Ajuda", href: "/faq" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-12 text-sm text-slate-600 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-xl tracking-tight text-brand-700">CLINI+</p>
          <p className="text-slate-500">© 2026 Clini+ Instituto Médico. Todos os direitos reservados.</p>
        </div>
        <div className="flex flex-wrap gap-8 font-medium">
          {links.map((link) => (
            <Link key={link.href} href={link.href as any} className="text-slate-600 hover:text-brand-600">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
