import { Heart, Stethoscope, Bone, Scale } from "lucide-react";
import Link from "next/link";

const especialidades = [
  {
    icon: Heart,
    title: "Cardiologia",
    subtitle: "Avaliação especializada para prevenção, diagnóstico e manejo de doenças do coração e sistema cardiovascular.",
    description: "A cardiologia é essencial para o acompanhamento de pacientes cardíacos crônicos, hipertensos e para a prevenção de doenças cardiovasculares. Nossos cardiologistas oferecem acompanhamento contínuo e detalhado, com a segurança de um profissional com RQE.",
  },
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    subtitle: "Atendimento amplo voltado à avaliação inicial, investigação de sintomas e orientação completa sobre cuidados com a saúde.",
    description: "O clínico geral é o ponto de partida para o seu cuidado. Este profissional atua na prevenção, diagnóstico e tratamento de doenças comuns, sendo fundamental para a primeira avaliação e para o encaminhamento correto a outras especialidades, garantindo que você receba o tratamento mais adequado.",
  },
  {
    icon: Bone,
    title: "Reumatologia",
    subtitle: "Tratamento dedicado às doenças que afetam articulações, músculos e ossos, promovendo alívio, mobilidade e bem-estar.",
    description: "Para quem busca alívio e tratamento para dores crônicas, a reumatologia é a especialidade ideal. Nossos reumatologistas auxiliam no manejo de doenças musculoesqueléticas e autoimunes, visando a melhoria da qualidade de vida e a recuperação da mobilidade.",
  },
  {
    icon: Scale,
    title: "Emagrecimento",
    subtitle: "Acompanhamento médico focado no tratamento da obesidade e na adoção de hábitos saudáveis.",
    description: "Mais do que estética, o emagrecimento é uma questão de saúde. Nossos especialistas oferecem um acompanhamento médico e multidisciplinar, focado em resultados duradouros e seguros, auxiliando no tratamento da obesidade e na reeducação de hábitos.",
  },
];

export default function EspecialidadesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-brand-700 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-extrabold md:text-5xl">ESPECIALIDADES</h1>
          <p className="mt-4 text-xl text-brand-100 max-w-2xl mx-auto">
            Na Clini+, você encontra o cuidado especializado que precisa, com a comodidade e o preço justo da telemedicina.
          </p>
        </div>
      </section>

      {/* Especialidades */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="space-y-16">
          {especialidades.map((esp, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-12"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0 h-16 w-16 rounded-2xl bg-brand-100 flex items-center justify-center">
                  <esp.icon className="h-8 w-8 text-brand-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-slate-900">{esp.title}</h2>
                  <p className="text-lg font-medium text-brand-600">{esp.subtitle}</p>
                  <p className="text-slate-600 leading-relaxed">{esp.description}</p>
                  <Link
                    href="/cadastro"
                    className="inline-block mt-4 rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 transition-colors"
                  >
                    AGENDE AGORA
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
