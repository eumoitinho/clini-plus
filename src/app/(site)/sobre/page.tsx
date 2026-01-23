import { Award, DollarSign, Shield, Users } from "lucide-react";

export default function SobrePage() {
  return (
    <div className="flex flex-col">
      {/* Simple Hero */}
      <section className="bg-brand-700 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-extrabold md:text-5xl">SOBRE A CLINI+</h1>
          <p className="mt-4 text-xl text-brand-100 max-w-2xl mx-auto">
            Nosso propósito: Saúde de qualidade para todos
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="grid gap-16 md:grid-cols-2 items-start">
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              A Clini+ Instituto Médico é um projeto idealizado pelo Dr. Richard Ramos, cardiologista formado pelo Instituto Ciências da Saúde, com residência em Clínica Médica e Cardiologia pelas conceituadas instituições do Hospital João XXIII em Belo Horizonte e Hospital da Beneficência Portuguesa de São Paulo, respectivamente.
            </p>
            <p>
              Com a expansão da telemedicina durante a pandemia, identificamos a oportunidade de transformar a forma como o cuidado especializado é entregue. Unimos tecnologia, experiência clínica e uma abordagem humanizada para democratizar o acesso à saúde, facilitando consultas, acompanhamentos e orientações personalizadas.
            </p>
            <p>
              Na Clini+, acreditamos que a tecnologia só faz sentido quando aproxima. E é isso que buscamos todos os dias: tornar o atendimento médico mais simples, seguro e presente na rotina de quem precisa, sem abrir mão da qualidade e da atenção individualizada.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-100 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Nossos Valores</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-500 flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Excelência médica</span>
                  <p className="text-slate-600 mt-1">Especialistas com Registro de Qualificação de Especialista (RQE)</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-500 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Acessibilidade</span>
                  <p className="text-slate-600 mt-1">Consultas com preço justo e a comodidade da telemedicina.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-500 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Segurança e confiança</span>
                  <p className="text-slate-600 mt-1">Sigilo profissional e proteção de dados em conformidade com a LGPD</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-500 flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Acompanhamento contínuo</span>
                  <p className="text-slate-600 mt-1">Possibilidade de ser atendido sempre pelo mesmo especialista</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
