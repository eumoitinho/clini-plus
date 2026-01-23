import Link from "next/link";
import {
  Clock,
  MapPin,
  DollarSign,
  Users,
  Heart,
  Stethoscope,
  Bone,
  Scale,
  UserCheck,
  Wallet,
  Award,
  FileText,
  BadgeCheck,
  CalendarCheck,
  UserPlus,
  Calendar,
  CreditCard,
  Video,
  Plus,
  Minus,
  Quote
} from "lucide-react";

const problemas = [
  {
    icon: Clock,
    title: "Falta de tempo?",
    description: "Com a Clini+, sua consulta dura de 20 a 30 minutos e pode ser feita no conforto de casa ou trabalho, no horário que for melhor para você."
  },
  {
    icon: MapPin,
    title: "Acesso difícil?",
    description: "Nossa plataforma conecta você a especialistas qualificados que, muitas vezes, seriam difíceis de encontrar ou acessar em sua região."
  },
  {
    icon: DollarSign,
    title: "Custo elevado?",
    description: "Oferecemos consultas com especialistas até 60% mais baratas que consultas presenciais, sem gastos extras com deslocamento."
  },
  {
    icon: Users,
    title: "Falta de continuidade?",
    description: "Na Clini+, você é acompanhado pelo mesmo especialista e tem acesso a seu histórico completo de consultas e exames."
  }
];

const especialidades = [
  {
    icon: Heart,
    title: "Cardiologia",
    description: "Avaliação especializada para prevenção, diagnóstico e manejo de doenças do coração e sistema cardiovascular."
  },
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    description: "Atendimento amplo voltado à avaliação inicial, investigação de sintomas e orientação completa sobre cuidados com a saúde."
  },
  {
    icon: Bone,
    title: "Reumatologia",
    description: "Tratamento dedicado às doenças que afetam articulações, músculos e ossos, promovendo alívio, mobilidade e bem-estar."
  },
  {
    icon: Scale,
    title: "Emagrecimento",
    description: "Acompanhamento médico focado no tratamento da obesidade e na adoção de hábitos saudáveis."
  }
];

const diferenciais = [
  {
    icon: UserCheck,
    title: "Acompanhamento contínuo",
    description: "Você será atendido sempre pelo mesmo especialista, garantindo a continuidade do seu tratamento e um relacionamento de confiança."
  },
  {
    icon: Wallet,
    title: "Preços acessíveis",
    description: "Consultas até 60% mais baratas que em consultórios presenciais. Cuidado especializado que cabe no seu bolso, sem abrir mão da qualidade."
  },
  {
    icon: Award,
    title: "Médicos especialistas",
    description: "Todos os nossos profissionais possuem o Registro de Qualificação de Especialista (RQE), um selo de excelência e segurança que atesta a qualidade de nossas consultas."
  },
  {
    icon: FileText,
    title: "Histórico clínico completo",
    description: "Todo o seu histórico de consultas e exames fica centralizado e acessível na plataforma, permitindo um acompanhamento mais completo e assertivo."
  },
  {
    icon: BadgeCheck,
    title: "Documentos válidos e seguros",
    description: "Receitas médicas, atestados e pedidos de exames com validade jurídica, emitidos digitalmente e disponíveis para download imediato."
  },
  {
    icon: CalendarCheck,
    title: "Consulta de retorno inclusa",
    description: "Asseguramos consultas de retorno gratuitas em até 15 dias, caso o médico identifique a necessidade de acompanhamento de exames."
  }
];

const etapas = [
  {
    numero: "1",
    icon: UserPlus,
    title: "Cadastro rápido",
    description: "Crie seu perfil em nossa plataforma em poucos minutos."
  },
  {
    numero: "2",
    icon: Users,
    title: "Escolha o especialista",
    description: "Selecione a especialidade e escolha o profissional que melhor se encaixa nas suas necessidades."
  },
  {
    numero: "3",
    icon: Calendar,
    title: "Agendamento flexível",
    description: "Consulte os slots de horários disponíveis e agende sua consulta de 20 ou 30 minutos."
  },
  {
    numero: "4",
    icon: CreditCard,
    title: "Pagamento seguro",
    description: "Efetue o pagamento da consulta de forma rápida e segura diretamente na plataforma, via Pix ou cartão de crédito."
  },
  {
    numero: "5",
    icon: Video,
    title: "Consulta online",
    description: "Acesse a sala de consulta no horário agendado, usando seu celular ou computador, e converse com seu especialista."
  }
];

const depoimentos = [
  {
    quote: "Sou cardíaca crônica e o acompanhamento contínuo era um desafio. Com a Clini+, consigo fazer todas as minhas consultas com o mesmo cardiologista, sem sair de casa. O preço é excelente e a segurança de ter um médico com RQE me tranquiliza muito.",
    name: "Maria S.",
    info: "58 anos, São Paulo"
  },
  {
    quote: "Minha rotina é muito corrida. Antes, eu adiava ir ao médico por causa do tempo perdido no trânsito e na espera. Agora, em 20 minutos, resolvo tudo. O melhor é o preço, muito mais acessível que as consultas presenciais.",
    name: "João P.",
    info: "45 anos, Belo Horizonte"
  },
  {
    quote: "Tinha receio da telemedicina, mas a Clini+ quebrou todas as minhas objeções. Consegui minha receita digital e o pedido de exames sem problemas. A plataforma é super intuitiva e o atendimento foi muito humano e atencioso.",
    name: "Ana L.",
    info: "32 anos, Campinas"
  }
];

const faqs = [
  {
    question: "A consulta por telemedicina é segura e válida?",
    answer: "Sim. Seguimos todas as normas do CFM (Resolução 2.314/2022) e utilizamos plataforma certificada com criptografia."
  },
  {
    question: "Os médicos são realmente especialistas?",
    answer: "Todos possuem RQE ativo e são verificados. Você vê o currículo e registro de cada um antes de agendar."
  },
  {
    question: "Posso receber prescrições médicas, atestados e pedidos de exames?",
    answer: "Sim, tudo com assinatura digital válida em qualquer farmácia ou laboratório do Brasil."
  },
  {
    question: "E se eu precisar de exame físico?",
    answer: "O médico avalia e, se necessário, orienta exame presencial ou encaminha para especialista local. Muitos casos são resolvidos 100% online."
  },
  {
    question: "Tem retorno gratuito?",
    answer: "Sim! Quando o médico indicar continuidade do tratamento ou avaliação de exames, o retorno em até 15 dias é gratuito. Entretanto, havendo alterações de sinais ou sintomas que requeiram novos procedimentos médicos, o atendimento será considerado uma nova consulta e deverá ser remunerado."
  },
  {
    question: "Posso consultar para familiar (idoso ou criança)?",
    answer: "Sim, cuidadores podem agendar e participar da consulta juntos."
  },
  {
    question: "Como pago?",
    answer: "PIX ou cartão de crédito (parcelado em até XX vezes, com juros)"
  },
  {
    question: "Posso cancelar ou remarcar?",
    answer: "Até 24h antes, sem custo. Após isso, taxa de R$ 30."
  },
  {
    question: "Não consigo entrar na consulta com o médico. O que fazer?",
    answer: "Antes do médico iniciar o atendimento, você receberá uma mensagem no WhatsApp informando sobre a consulta. Após ser notificado, basta clicar em 'Ir para consulta' no app ou acessar o link enviado na mensagem."
  },
  {
    question: "Como habilitar áudio e vídeo na chamada?",
    answer: "Para habilitar o áudio e/ou o vídeo em sua chamada, verifique se os ícones do microfone e da câmera estão vermelhos e com uma faixa branca os atravessando. Caso estejam, isso significa que estão desabilitados. Para habilitá-los, clique em cima de cada um para serem ativados. Ao ser chamado para o atendimento, autorize o uso de áudio e de vídeo para ver, ouvir e poder conversar com o profissional de saúde."
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Bloco 1 - Hero Section */}
      <section className="relative overflow-hidden bg-brand-700 pb-20 pt-10 text-white lg:pb-32 lg:pt-20">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="-mb-1 w-full text-slate-50"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              O cuidado médico especializado que cabe na sua rotina
            </h1>
            <p className="max-w-lg text-lg text-brand-100 md:text-xl">
              Consultas online com médicos especialistas e acompanhamento contínuo, sem sair de casa.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/cadastro"
                className="rounded-full bg-orange-500 px-8 py-4 text-base font-bold text-white transition hover:bg-orange-600 shadow-lg shadow-orange-500/20"
              >
                AGENDE AGORA!
              </Link>
            </div>
          </div>
          <div className="hidden md:flex flex-col justify-center space-y-6">
            <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-8 w-8 text-red-400" />
                <span className="text-xl font-bold">Cardiologia</span>
              </div>
              <p className="text-brand-100 mb-4">
                Cuide do seu coração e previna doenças
              </p>
              <p className="text-2xl font-bold mb-4">
                Consultas cardiológicas em vídeo a partir de <span className="text-orange-400">R$149,90</span>.
              </p>
              <Link
                href="/cadastro"
                className="inline-block rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                AGENDE AGORA!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 2 - Como funciona intro */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl mb-8">
            Como levamos saúde de qualidade até você
          </h2>
          <div className="text-lg text-slate-600 space-y-4 text-left md:text-center">
            <p>
              A Clini+ é uma plataforma de telemedicina dedicada a oferecer consultas acessíveis com especialistas de diversas áreas da saúde. A consulta funciona exatamente como no consultório, mas você pode fazer tudo de casa, sem precisar enfrentar trânsito, filas ou salas de espera. O médico te vê, pergunta tudo o que precisa e, na maioria dos casos, resolve tudo na hora, com a mesma segurança e eficácia da consulta presencial.
            </p>
            <p>
              Além da conveniência, você recebe acompanhamento contínuo com o mesmo especialista e paga até 60% menos que em consultas presenciais.
            </p>
          </div>
          <div className="mt-10">
            <Link
              href="/cadastro"
              className="inline-block rounded-full bg-brand-600 px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-brand-500"
            >
              AGENDE SUA CONSULTA AGORA!
            </Link>
          </div>
        </div>
      </section>

      {/* Bloco 3 - O que impede */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              O que impede o cuidado com sua saúde?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {problemas.map((item) => (
              <div key={item.title} className="group rounded-3xl bg-slate-50 p-8 transition hover:shadow-md hover:-translate-y-1 border border-slate-100">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 4 - Especialidades */}
      <section className="bg-brand-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Nossas especialidades</h2>
            <p className="mt-4 text-lg text-slate-600">Escolha o médico ideal para o seu caso:</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {especialidades.map((esp) => (
              <div key={esp.title} className="rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-lg">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                  <esp.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{esp.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{esp.description}</p>
                <Link
                  href="/cadastro"
                  className="inline-block rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-500"
                >
                  AGENDE AGORA
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 5 - Diferenciais */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              A excelência da Telemedicina ao seu alcance
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {diferenciais.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 6 - Etapas */}
      <section className="bg-brand-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Sua consulta online em 5 etapas
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-5">
            {etapas.map((etapa) => (
              <div key={etapa.numero} className="text-center">
                <div className="mb-4 mx-auto h-16 w-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                  <etapa.icon className="h-8 w-8" />
                </div>
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold">
                  {etapa.numero}
                </div>
                <h3 className="text-lg font-bold mb-2">{etapa.title}</h3>
                <p className="text-brand-100 text-sm leading-relaxed">{etapa.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 7 - Depoimentos */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Quem usa a Clini+ recomenda
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {depoimentos.map((dep, index) => (
              <div key={index} className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100">
                <Quote className="h-8 w-8 text-brand-200 mb-4" />
                <p className="text-slate-700 italic leading-relaxed mb-6">"{dep.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold">
                    {dep.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{dep.name}</p>
                    <p className="text-sm text-slate-500">{dep.info}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/cadastro"
              className="inline-block rounded-full bg-brand-600 px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-brand-500"
            >
              SEJA O PRÓXIMO A TER UMA EXPERIÊNCIA CLINI+
            </Link>
          </div>
        </div>
      </section>

      {/* Bloco 8 - FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Perguntas frequentes
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-medium text-slate-900">
                    <span className="font-semibold">{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <Plus className="h-5 w-5 group-open:hidden text-brand-600" />
                      <Minus className="h-5 w-5 hidden group-open:block text-brand-600" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 9 - Contato CTA */}
      <section className="bg-brand-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl mb-6">
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="text-xl text-brand-100 mb-10">
            Agende sua consulta online agora mesmo e experimente a praticidade da telemedicina com especialistas qualificados.
          </p>
          <Link
            href="/cadastro"
            className="inline-block rounded-full bg-white px-10 py-4 text-lg font-bold text-brand-700 shadow-xl transition hover:bg-gray-100"
          >
            AGENDAR CONSULTA
          </Link>
        </div>
      </section>
    </div>
  );
}
