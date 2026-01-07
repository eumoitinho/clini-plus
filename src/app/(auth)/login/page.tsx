export default function LoginPage() {
  return (
    <section className="mx-auto max-w-md space-y-6">
      <div>
        <h1 className="section-title">Entrar</h1>
        <p className="section-subtitle">Acesse sua conta para continuar.</p>
      </div>
      <form className="grid gap-4 rounded-2xl border border-slate-200 p-6">
        <label className="grid gap-2 text-sm">
          E-mail
          <input className="rounded-lg border border-slate-300 px-4 py-2" name="email" type="email" />
        </label>
        <label className="grid gap-2 text-sm">
          Senha
          <input className="rounded-lg border border-slate-300 px-4 py-2" name="password" type="password" />
        </label>
        <button className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white" type="submit">
          Entrar
        </button>
        <a className="text-center text-sm text-brand-700" href="/recuperar-senha">
          Esqueceu a senha?
        </a>
      </form>
    </section>
  );
}
