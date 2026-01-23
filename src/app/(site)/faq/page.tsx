import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "O que é Telemedicina?",
    answer: "A telemedicina é um recurso tecnológico e de comunicação que visa aperfeiçoar o atendimento médico e a saúde do paciente. Ela possibilita que profissionais da área troquem informações, pareceres e opiniões a distância, além de viabilizar consultas, diagnósticos e o acompanhamento de pacientes remotamente. A modalidade é utilizada para transferir laudos, diagnósticos e exames de maneira digital, ampliando o acesso ao atendimento e ultrapassando as barreiras de hospitais, clínicas e consultórios."
  },
  {
    question: "Quais as vantagens da Telemedicina?",
    answer: "A telemedicina oferece uma assistência médica precisa, globalizada e acessível, eliminando a necessidade de locomoção. A tecnologia aplicada aos serviços otimiza a assistência primária, melhora os processos atuais, minimiza riscos e reduz custos para o paciente. Para os profissionais, o recurso é benéfico pela flexibilidade, autonomia e possibilidade de colaboração mútua na tomada de decisões médicas."
  },
  {
    question: "A consulta por telemedicina é segura e válida?",
    answer: "Sim, é totalmente segura e válida. A Clini+ segue rigorosamente todas as normas do Conselho Federal de Medicina (CFM) e utiliza uma plataforma certificada com criptografia de dados de ponta a ponta, garantindo que suas informações e a comunicação com o médico sejam confidenciais e protegidas."
  },
  {
    question: "Os médicos são realmente especialistas?",
    answer: "Sim. Todos os profissionais da Clini+ possuem Registro de Qualificação de Especialista (RQE) ativo e são verificados. Você pode consultar o currículo e o registro de cada um antes de agendar sua consulta."
  },
  {
    question: "Posso receber prescrições médicas, atestados e pedidos de exames?",
    answer: "Sim. A Clini+ emite todos os documentos pós-consulta (receitas, atestados e pedidos de exames) com assinatura digital válida em qualquer farmácia ou laboratório do Brasil, seguindo as normas do CFM. Você pode fazer o download diretamente na plataforma."
  },
  {
    question: "E se eu precisar de exame físico?",
    answer: "O médico avalia e, se necessário, orienta exame presencial ou encaminha para especialista local. Muitos casos são resolvidos 100% online."
  },
  {
    question: "A Clini+ oferece retorno gratuito?",
    answer: "Sim. Quando o médico indicar a continuidade do tratamento ou a avaliação de exames, o retorno em até 15 dias é gratuito. Havendo alterações de sinais ou sintomas que requeiram novos procedimentos médicos, o atendimento será considerado uma nova consulta e deverá ser remunerado."
  },
  {
    question: "Posso consultar para familiar (idoso ou criança)?",
    answer: "Sim. Cuidadores e responsáveis podem agendar e participar da consulta junto com o paciente."
  },
  {
    question: "Como entro na minha teleconsulta agendada?",
    answer: "Antes do médico iniciar o atendimento, você receberá uma mensagem no WhatsApp informando sobre a consulta. Após ser notificado, basta clicar em 'Ir para consulta' no app ou acessar o link enviado na mensagem."
  },
  {
    question: "Não consigo entrar na consulta com o médico. O que fazer?",
    answer: "Se tiver qualquer problema, acione nosso time de suporte através do WhatsApp ou do Chat em tempo real na plataforma."
  },
  {
    question: "Como habilitar áudio e vídeo na chamada?",
    answer: "Ao ser chamado, autorize o uso de áudio e vídeo. Se os ícones estiverem desabilitados (vermelhos ou com faixa branca), clique neles para ativá-los."
  },
  {
    question: "Como pago?",
    answer: "O pagamento pode ser feito via PIX ou cartão de crédito (com possibilidade de parcelamento em até XX vezes, com juros)."
  },
  {
    question: "Posso cancelar ou remarcar?",
    answer: "Você pode cancelar ou remarcar sua consulta até 24 horas antes do horário agendado, sem custo. Após esse período, será aplicada uma taxa de R$ 30."
  }
];

export default function FAQPage() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">F.A.Q</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">CENTRAL DE DÚVIDAS</p>
        </div>
        <dl className="mx-auto mt-16 max-w-2xl space-y-6 sm:mt-20 lg:mt-24 lg:max-w-4xl opacity-100">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900">
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <Plus className="h-6 w-6 group-open:hidden text-brand-600" />
                    <Minus className="h-6 w-6 hidden group-open:block text-brand-600" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-7">{faq.answer}</p>
              </details>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
