import { Trash2, Edit, Info } from "lucide-react";
import Link from "next/link";

export default function PrivacidadePage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-base leading-7 text-slate-700">
        <p className="text-base font-semibold leading-7 text-brand-600">Jurídico</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Proteção de Dados</h1>
        <p className="mt-6 text-xl leading-8">
          A Clini+ Instituto Médico leva muito a sério a privacidade e a proteção de dados pessoais de pacientes, profissionais de saúde, colaboradores e demais titulares que se relacionam conosco. Prezamos por realizar o tratamento dos seus dados de forma segura, transparente e ética, em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018) e demais legislações aplicáveis.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Utilizamos criptografia de dados de ponta a ponta em nossa plataforma, garantindo que as informações fornecidas sejam protegidas contra perda, utilização indevida, acesso, divulgação, alteração ou destruição não autorizados. Além disso, o sigilo profissional é inteiramente garantido.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900">Por que solicitamos seus dados pessoais?</h2>
          <p className="mt-6">
            A plataforma solicita dados pessoais com a finalidade de realizar a identificação e cadastro do usuário, disponibilizar os serviços de telemedicina, garantir a prestação de serviço efetiva e contatar o usuário sobre modificações.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900">O que são dados pessoais?</h2>
          <p className="mt-6">
            De acordo com a lei, consideram-se dados pessoais quaisquer informações relativas a uma pessoa individual identificada ou identificável (ex: nome, número de identificação).
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900">Seus direitos como titular de dados</h2>
          <p className="mt-6">
            Como titular dos dados, você possui direitos garantidos:
          </p>

          <ul role="list" className="mt-8 max-w-xl space-y-8 text-slate-600">
            <li className="flex gap-x-3">
              <Trash2 className="mt-1 h-5 w-5 flex-none text-brand-600" />
              <span>
                <strong className="font-semibold text-slate-900">Direito de ser excluído:</strong> Solicitar a exclusão de suas informações pessoais.
              </span>
            </li>
            <li className="flex gap-x-3">
              <Edit className="mt-1 h-5 w-5 flex-none text-brand-600" />
              <span>
                <strong className="font-semibold text-slate-900">Direito à retificação de dados:</strong> Solicitar correções e/ou complementações sobre dados previamente informados.
              </span>
            </li>
            <li className="flex gap-x-3">
              <Info className="mt-1 h-5 w-5 flex-none text-brand-600" />
              <span>
                <strong className="font-semibold text-slate-900">Direito à transparência:</strong> Solicitar informações sobre o processamento e armazenamento dos seus dados.
              </span>
            </li>
          </ul>

          <p className="mt-10">
            <Link href="/termos" className="text-brand-600 font-semibold hover:text-brand-500">
              Leia nossa Política de Privacidade completa.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
