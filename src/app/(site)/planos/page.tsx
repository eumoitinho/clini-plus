const plans = [
  {
    name: "Essencial",
    price: "R$ 199/mês",
    description: "Ideal para clínicas iniciando na telemedicina.",
    features: ["Agenda básica", "Sala de vídeo", "Suporte por e-mail"]
  },
  {
    name: "Profissional",
    price: "R$ 399/mês",
    description: "Recursos completos para escalar atendimentos.",
    features: ["Chat em tempo real", "Upload de documentos", "Integrações base"]
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    description: "Personalizado para grandes operações.",
    features: ["Gestão multi-unidade", "Relatórios avançados", "Suporte dedicado"]
  }
];

export default function PlanosPage() {
  return (
    <section>
      <h1 className="section-title">Planos e preços</h1>
      <p className="section-subtitle">Escolha a melhor opção para sua clínica.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900">{plan.name}</h2>
            <p className="mt-2 text-sm text-brand-700">{plan.price}</p>
            <p className="mt-4 text-sm text-slate-600">{plan.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
