import Link from "next/link";
import {
  CalendarPlus,
  Percent,
  Calendar,
  FileText,
  Pill,
  ClipboardList,
  FolderOpen,
  FileCheck
} from "lucide-react";

const menuItems = [
  { label: "Agendar Consulta", icon: CalendarPlus, href: "/paciente/agendamentos/novo" },
  { label: "Nossas Campanhas", icon: Percent, href: "/paciente/campanhas" },
  { label: "Minhas Consultas", icon: Calendar, href: "/paciente/agendamentos" },
  { label: "Resultado de Exames", icon: FileText, href: "/paciente/exames" },
  { label: "Prescrições", icon: Pill, href: "/paciente/prescricoes" },
  { label: "Pedido de Exames", icon: ClipboardList, href: "/paciente/pedidos" },
  { label: "Documentos", icon: FolderOpen, href: "/paciente/documentos" },
  { label: "Atestados", icon: FileCheck, href: "/paciente/atestados" }
];

export default function PacienteDashboardPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-white">
      {/* Top Banner / Welcome Area */}
      <div className="mx-auto w-full max-w-7xl px-4 py-8 lg:px-8">
        <div className="mb-10">
          <p className="text-lg font-medium text-slate-500">Boa tarde,</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mt-1">
            Visitante <span className="text-red-500">❤</span>
          </h1>
          <p className="mt-2 text-slate-600">O que deseja fazer hoje?</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
           {/* Left Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex flex-col items-center justify-center rounded-[2rem] bg-brand-50 p-6 text-center transition-all hover:bg-brand-100 hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-500/30 transition-transform group-hover:scale-110">
                  <item.icon className="h-7 w-7" />
                </div>
                <span className="text-sm font-bold text-slate-700 leading-tight">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Right Promo / Banner Area */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white shadow-2xl">
             <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
             <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl"></div>
             
             <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                   <h2 className="text-3xl font-extrabold leading-none md:text-5xl">
                     Medicina,<br />
                     odontologia<br />
                     e exames
                   </h2>
                   <div className="mt-4 inline-block rounded-xl bg-white px-4 py-1 text-2xl font-black text-brand-700">
                     PARA TODOS.
                   </div>
                </div>

                <div className="mt-10 space-y-4">
                  <p className="max-w-xs text-lg font-medium text-brand-100">
                    Para cuidar de milhões, começamos por <span className="underline decoration-2 underline-offset-4">VOCÊ</span>.
                  </p>
                  
                  <div className="flex gap-4">
                     <div className="rounded-xl bg-brand-500/50 p-4 backdrop-blur-md border border-brand-400/30 flex-1 text-center">
                        <span className="block text-xs font-bold uppercase text-brand-200">Consultas a partir de</span>
                        <div className="flex items-end justify-center">
                           <span className="text-sm mb-1">R$</span>
                           <span className="text-4xl font-black">40</span>
                        </div>
                     </div>
                     <div className="rounded-xl bg-orange-500 p-4 shadow-lg shadow-orange-500/30 flex-1 text-center">
                        <span className="block text-xs font-bold uppercase text-white/90">Clínico Geral</span>
                        <div className="flex items-end justify-center">
                           <span className="text-sm mb-1">R$</span>
                           <span className="text-4xl font-black">30</span>
                        </div>
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
