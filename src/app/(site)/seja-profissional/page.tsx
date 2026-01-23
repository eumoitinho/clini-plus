import { FileText, Calendar, Eye, Zap } from "lucide-react";
import Link from "next/link";

const beneficios = [
  {
    icon: FileText,
    title: "Prontuário integrado",
    description: "Tenha acesso a um sistema de prontuário eletrônico completo e seguro. Registre informações clínicas, histórico de consultas e exames de forma organizada, garantindo a continuidade do tratamento e um acompanhamento mais assertivo para seus pacientes.",
  },
  {
    icon: Calendar,
    title: "Agenda online",
    description: "Gerencie seus horários com total flexibilidade. Nossa agenda online permite que você defina seus slots de atendimento e realize suas consultas em tempo real, de forma prática e eficiente, otimizando seu tempo e produtividade.",
  },
  {
    icon: Eye,
    title: "Alta visibilidade",
    description: "Construa sua presença online com um perfil completo e profissional, que aumenta sua credibilidade e amplia o alcance do seu trabalho.",
  },
  {
    icon: Zap,
    title: "Autonomia",
    description: "Atenda de forma independente, com praticidade e segurança, ampliando suas oportunidades de ganhos. Oferecemos a estrutura tecnológica e o suporte necessário para que você atenda com segurança, em conformidade com as normas do CFM.",
  },
];

export default function SejaProfissionalPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-brand-700 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-extrabold md:text-5xl">Seja um profissional Clini+</h1>
          <p className="mt-4 text-xl text-brand-100 max-w-2xl mx-auto">
            Se você é médico especialista ou generalista e deseja expandir sua atuação e fazer parte de uma plataforma de telemedicina segura e acessível, a Clini+ Instituto Médico é a escolha ideal para você!
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-12 text-center">
        <p className="text-lg text-slate-600 leading-relaxed">
          Atue de forma independente, com a segurança e o suporte de uma plataforma tecnológica de ponta.
        </p>
      </section>

      {/* Benefícios */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-8 md:grid-cols-2">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-brand-100 flex items-center justify-center">
                  <beneficio.icon className="h-6 w-6 text-brand-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">{beneficio.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{beneficio.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA e Formulário */}
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-2xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900">Cadastro para médicos especialistas e generalistas</h2>
            <p className="mt-4 text-slate-600">
              Se você é médico com CRM ativo e busca uma nova forma de exercer a medicina com excelência, autonomia e flexibilidade, a Clini+ é o seu lugar. Aguarde a aprovação do seu cadastro
            </p>
          </div>

          {/* Formulário placeholder */}
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <form className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-slate-700">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 px-4 py-3 border"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 px-4 py-3 border"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="crm" className="block text-sm font-medium text-slate-700">
                  CRM
                </label>
                <input
                  type="text"
                  id="crm"
                  name="crm"
                  className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 px-4 py-3 border"
                  placeholder="Seu CRM"
                />
              </div>
              <div>
                <label htmlFor="especialidade" className="block text-sm font-medium text-slate-700">
                  Especialidade
                </label>
                <input
                  type="text"
                  id="especialidade"
                  name="especialidade"
                  className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 px-4 py-3 border"
                  placeholder="Sua especialidade"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-slate-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 px-4 py-3 border"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-brand-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 transition-colors"
              >
                CADASTRE-SE AGORA!
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
