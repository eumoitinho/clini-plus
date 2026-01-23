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
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-700 text-white shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-brand-700">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-5 w-5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
          Lorem Ipsum
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/80 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-sm">
          <Link
            href="/login"
            className="hidden rounded-full px-4 py-2 font-medium text-white hover:bg-white/10 md:block" // Removed border/bg for cleaner look
          >
            Entrar
          </Link>
          <Link
            href="/cadastro"
            className="rounded-full bg-white px-5 py-2.5 font-bold text-brand-700 shadow-lg hover:bg-brand-50 transition-colors"
          >
            Criar conta
          </Link>
        </div>
      </div>
    </header>
  );
}
