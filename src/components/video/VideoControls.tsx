"use client";

type Props = {
  micEnabled: boolean;
  cameraEnabled: boolean;
  onToggleMute: () => void;
  onToggleCamera: () => void;
  onLeave: () => void;
};

export function VideoControls({ micEnabled, cameraEnabled, onToggleMute, onToggleCamera, onLeave }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={onToggleMute}
        className="rounded-full border border-slate-300 px-4 py-2 text-sm"
      >
        {micEnabled ? "Mudo" : "Ativar áudio"}
      </button>

      <button
        type="button"
        onClick={onToggleCamera}
        className="rounded-full border border-slate-300 px-4 py-2 text-sm"
      >
        {cameraEnabled ? "Desligar câmera" : "Ligar câmera"}
      </button>

      <button type="button" onClick={onLeave} className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white">
        Sair
      </button>
    </div>
  );
}
