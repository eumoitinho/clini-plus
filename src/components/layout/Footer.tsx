const links = [
  { label: "Termos de Uso", href: "/termos" },
  { label: "Política de Privacidade", href: "/privacidade" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-slate-800">CLINIPLUS</p>
          <p className="text-xs">Cuidando de você em qualquer lugar.</p>
        </div>
        <div className="flex gap-6">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brand-700">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
