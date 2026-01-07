export default function RecuperarSenhaPage() {
  return (
    <section className="mx-auto max-w-md space-y-6">
      <div>
        <h1 className="section-title">Recuperar senha</h1>
        <p className="section-subtitle">Enviaremos um link para redefinir sua senha.</p>
      </div>
      <form className="grid gap-4 rounded-2xl border border-slate-200 p-6">
        <label className="grid gap-2 text-sm">
          E-mail
          <input className="rounded-lg border border-slate-300 px-4 py-2" name="email" type="email" />
        </label>
        <button className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white" type="submit">
          Enviar link
        </button>
      </form>
    </section>
  );
}
