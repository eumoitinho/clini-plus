export function VideoControls() {
  return (
    <div className="flex flex-wrap gap-3">
      <button className="rounded-full border border-slate-300 px-4 py-2 text-sm">Mudo</button>
      <button className="rounded-full border border-slate-300 px-4 py-2 text-sm">Câmera</button>
      <button className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white">Sair</button>
    </div>
  );
}
