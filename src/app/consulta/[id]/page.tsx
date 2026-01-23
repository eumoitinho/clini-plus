import { VideoClient } from "./VideoClient";

export default async function ConsultaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <section className="space-y-4">
      <h1 className="section-title">Sala de Consulta</h1>
      <p className="text-sm text-slate-700">
        Aqui ficará a sala de vídeo e o chat em tempo real da consulta.
      </p>

      <VideoClient consultaId={id} />
    </section>
  );
}
