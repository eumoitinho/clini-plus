import Link from "next/link";

const benefits = [
  "Agendamento rápido com especialistas verificados.",
  "Sala de vídeo integrada com qualidade adaptativa.",
  "Chat seguro para acompanhar sua consulta."
];

const testimonials = [
  {
    name: "Marina Soares",
    role: "Paciente",
    quote: "Consegui atendimento no mesmo dia e o médico foi excelente."
  },
  {
    name: "Dr. Paulo Lima",
    role: "Cardiologista",
    quote: "A plataforma facilita minha agenda e melhora o acompanhamento."
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="rounded-3xl bg-slate-900 px-8 py-14 text-white">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-slate-300">CLINIPLUS</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight">
            Telemedicina segura para pacientes e profissionais de saúde.
          </h1>
          <p className="mt-4 text-base text-slate-200">
            Conecte-se a especialistas com poucos cliques, acompanhe consultas e cuide da sua saúde de forma
            digital.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/cadastro"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
            >
              Começar agora
            </Link>
            <Link
              href="/planos"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
            >
              Ver planos
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Benefícios pensados para você</h2>
        <p className="section-subtitle">Tudo o que sua clínica precisa para operar online.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-2xl border border-slate-200 p-6">
              <p className="text-sm text-slate-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Quem usa recomenda</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-2xl bg-slate-50 p-6">
              <p className="text-sm text-slate-700">“{testimonial.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{testimonial.name}</p>
              <p className="text-xs text-slate-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-brand-50 p-8">
        <h2 className="section-title">Pronto para transformar o cuidado digital?</h2>
        <p className="section-subtitle">Equipe CLINIPLUS pronta para apoiar sua jornada.</p>
        <Link
          href="/contato"
          className="mt-6 inline-flex rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white"
        >
          Fale conosco
        </Link>
      </section>
    </div>
  );
}
