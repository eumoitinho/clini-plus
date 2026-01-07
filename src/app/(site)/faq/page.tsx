const faqs = [
  {
    question: "Como funciona o agendamento?",
    answer: "Escolha o profissional, selecione o horário disponível e confirme o pagamento."
  },
  {
    question: "Posso remarcar uma consulta?",
    answer: "Sim, você pode remarcar ou cancelar diretamente no painel do paciente."
  },
  {
    question: "A plataforma é segura?",
    answer: "Sim, seguimos padrões de segurança e LGPD para proteger seus dados."
  }
];

export default function FaqPage() {
  return (
    <section>
      <h1 className="section-title">Perguntas frequentes</h1>
      <div className="mt-8 space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-2xl border border-slate-200 p-6">
            <summary className="cursor-pointer text-sm font-semibold text-slate-900">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm text-slate-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
