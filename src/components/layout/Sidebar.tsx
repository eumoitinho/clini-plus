const links = [
  { label: "Dashboard", href: "/" },
  { label: "Perfil", href: "/perfil" },
  { label: "Agendamentos", href: "/agendamentos" }
];

export function Sidebar() {
  return (
    <aside className="w-full max-w-[240px] rounded-2xl border border-slate-200 p-4">
      <p className="text-xs uppercase tracking-wide text-slate-500">Menu</p>
      <nav className="mt-4 space-y-2 text-sm">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="block rounded-lg px-3 py-2 text-slate-700">
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
