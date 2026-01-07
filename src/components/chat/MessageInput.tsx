export function MessageInput() {
  return (
    <form className="mt-4 flex gap-3">
      <input
        className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-sm"
        placeholder="Digite sua mensagem"
      />
      <button className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white" type="submit">
        Enviar
      </button>
    </form>
  );
}
