import { User } from "lucide-react";
import Link from "next/link";

const especialistas = [
  {
    nome: "Dr. Richard Ramos",
    especialidade: "Cardiologista",
    crm: "CRM/RQE:",
    descricao: "Dr. Richard Neves Ramos é o idealizador da Clini+ e cardiologista. Formado pelo Instituto Ciências da Saúde, possui residência em Clínica Médica e Cardiologia, respectivamente, pelo Hospital João XXIII em Belo Horizonte e pelo Hospital da Beneficência Portuguesa de São Paulo.",
    complemento: "Com vasta experiência em atendimento ambulatorial e hospitalar, incluindo UTIs e emergências cardiovasculares, Richard atua principalmente com a cardiologia esportiva. Seu objetivo é oferecer um atendimento humanizado, baseado em evidências científicas e adaptado ao estilo de vida de cada paciente, promovendo a saúde do coração com excelência.",
  },
  {
    nome: "Dra. Andreza Neves",
    especialidade: "Reumatologista",
    crm: "CRM:",
    descricao: "Dra. Andreza Neves é formada na área de Reumatologia pela Santa Casa de Porto Alegre, uma das instituições de saúde mais respeitadas do país.",
    complemento: "Com foco no diagnóstico e tratamento de doenças que afetam articulações, músculos e ossos, Andreza utiliza uma abordagem humanizada e baseada nas mais recentes evidências científicas. Sua atuação visa proporcionar alívio e bem-estar aos pacientes, auxiliando no manejo de condições crônicas e na recuperação da qualidade de vida, com a comodidade e a segurança da telemedicina.",
  },
];

export default function EspecialistasPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-brand-700 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-extrabold md:text-5xl">NOSSOS ESPECIALISTAS</h1>
          <p className="mt-4 text-xl text-brand-100 max-w-2xl mx-auto">
            Profissionais dedicados ao seu acompanhamento.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-12 text-center">
        <p className="text-lg text-slate-600 leading-relaxed">
          Na Clini+, a qualidade do seu atendimento é a nossa prioridade. Por isso, nosso corpo clínico é composto por médicos especialistas em diversas áreas.
        </p>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          Antes de agendar sua consulta, você tem acesso ao currículo e ao registro de cada profissional, garantindo total transparência e segurança na sua escolha.
        </p>
      </section>

      {/* Especialistas */}
      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="space-y-12">
          {especialistas.map((esp, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-12"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-shrink-0 h-32 w-32 rounded-full bg-slate-100 flex items-center justify-center mx-auto md:mx-0">
                  <User className="h-16 w-16 text-slate-400" />
                </div>
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{esp.nome} - {esp.especialidade}</h2>
                    <p className="text-brand-600 font-medium mt-1">{esp.crm}</p>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{esp.descricao}</p>
                  <p className="text-slate-600 leading-relaxed">{esp.complemento}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">SEJA UM PROFISSIONAL CLINI+!</h2>
          <p className="mt-4 text-lg text-slate-600">
            Junte-se à nossa equipe de especialistas e faça parte de uma plataforma de telemedicina segura e acessível.
          </p>
          <Link
            href="/seja-profissional"
            className="inline-block mt-8 rounded-full bg-brand-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 transition-colors"
          >
            SAIBA MAIS
          </Link>
        </div>
      </section>
    </div>
  );
}
