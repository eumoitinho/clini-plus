import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    price: "199",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit", "Sed do eiusmod"]
  },
  {
    name: "Profissional",
    price: "399",
    description: "Ut enim ad minim veniam, quis nostrud exercitation.",
    features: ["Tudo do Essencial", "Ullamco laboris nisi", "Ut aliquip ex ea", "Commodo consequat", "Duis aute irure"]
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    description: "Duis aute irure dolor in reprehenderit in voluptate.",
    features: ["Tudo do Profissional", "Velit esse cillum", "Dolore eu fugiat", "Nulla pariatur", "Excepteur sint occaecat"]
  }
];

export default function PlanosPage() {
  return (
    <div className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">Preços</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Plans for every team size</p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
        </p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 ring-1 xl:p-10 ${
                index === 1
                  ? "bg-white ring-brand-600 shadow-xl scale-105 z-10"
                  : "bg-white/60 ring-slate-200 hover:bg-white hover:shadow-lg transition-all"
              }`}
            >
              <h3 className={`text-lg font-semibold leading-8 ${index === 1 ? 'text-brand-600' : 'text-slate-900'}`}>
                {plan.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-x-1">
                 {plan.price !== "Sob consulta" && <span className="text-4xl font-bold tracking-tight text-slate-900">R$</span>}
                <span className="text-4xl font-bold tracking-tight text-slate-900">{plan.price}</span>
                {plan.price !== "Sob consulta" && <span className="text-sm font-semibold leading-6 text-slate-600">/mês</span>}
              </div>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className={`h-6 w-5 flex-none ${index === 1 ? 'text-brand-600' : 'text-slate-400'}`} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/cadastro"
                className={`mt-8 block rounded-full px-3 py-3 text-center text-sm font-bold shadow-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                   index === 1
                    ? "bg-brand-600 text-white hover:bg-brand-500 focus-visible:outline-brand-600 shadow-brand-500/30"
                    : "bg-brand-50 text-brand-600 hover:bg-brand-100"
                }`}
              >
                Começar agora
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
