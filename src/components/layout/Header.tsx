import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/planos", label: "Planos" },
  { href: "/contato", label: "Contato" },
  { href: "/faq", label: "FAQ" }
];

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5">
        <Link href="/" className="text-lg font-semibold text-brand-700">
          CLINIPLUS
        </Link>
        <nav className="flex items-center gap-6 text-sm text-slate-600">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-700">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-sm">
          <Link
            href="/login"
            className="rounded-full border border-brand-500 px-4 py-2 font-medium text-brand-700"
          >
            Entrar
          </Link>
          <Link
            href="/cadastro"
            className="rounded-full bg-brand-500 px-4 py-2 font-medium text-white"
          >
            Criar conta
          </Link>
        </div>
      </div>
    </header>
  );
}
