export default function ContatoPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="section-title">Fale com a CLINIPLUS</h1>
        <p className="section-subtitle">Nossa equipe responderá em até 1 dia útil.</p>
      </div>
      <form className="grid gap-4 rounded-2xl border border-slate-200 p-6">
        <label className="grid gap-2 text-sm">
          Nome completo
          <input className="rounded-lg border border-slate-300 px-4 py-2" name="nome" />
        </label>
        <label className="grid gap-2 text-sm">
          E-mail
          <input className="rounded-lg border border-slate-300 px-4 py-2" name="email" type="email" />
        </label>
        <label className="grid gap-2 text-sm">
          Mensagem
          <textarea className="min-h-[120px] rounded-lg border border-slate-300 px-4 py-2" name="mensagem" />
        </label>
        <button
          type="submit"
          className="w-full rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white"
        >
          Enviar mensagem
        </button>
      </form>
    </section>
  );
}
