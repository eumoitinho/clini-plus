import { Mail, MapPin, Phone } from "lucide-react";

export default function ContatoPage() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">Fale conosco</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div>
            <h3 className="border-l-4 border-brand-500 pl-4 font-semibold text-slate-900">Endereço</h3>
            <address className="border-l-4 border-slate-200 pl-4 pt-2 not-italic text-slate-600">
              <p>Rua Exemplo, 1000</p>
              <p>São Paulo, SP 01000-000</p>
            </address>
          </div>
          <div>
            <h3 className="border-l-4 border-brand-500 pl-4 font-semibold text-slate-900">Telefone</h3>
            <div className="border-l-4 border-slate-200 pl-4 pt-2 text-slate-600">
              <p>+55 11 99999-9999</p>
              <p>+55 11 3333-3333</p>
            </div>
          </div>
          <div>
            <h3 className="border-l-4 border-brand-500 pl-4 font-semibold text-slate-900">Email</h3>
            <div className="border-l-4 border-slate-200 pl-4 pt-2 text-slate-600">
              <p>contato@cliniplus.com.br</p>
              <p>suporte@cliniplus.com.br</p>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-24">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
                <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:p-12">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900">Envie uma mensagem</h3>
                     <p className="mt-4 text-sm leading-6 text-slate-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <form action="#" method="POST" className="mt-8 space-y-6">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-slate-900">Nome</label>
                                <div className="mt-2.5">
                                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-2xl border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-slate-900">Sobrenome</label>
                                <div className="mt-2.5">
                                    <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-2xl border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>
                         <div>
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900">Email</label>
                                <div className="mt-2.5">
                                    <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-2xl border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" />
                                </div>
                         </div>
                         <div>
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-900">Mensagem</label>
                                <div className="mt-2.5">
                                    <textarea name="message" id="message" rows={4} className="block w-full rounded-2xl border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" defaultValue={""} />
                                </div>
                         </div>
                         <button type="submit" className="block w-full rounded-full bg-brand-600 px-3.5 py-2.5 text-center text-sm font-bold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-colors">Enviar mensagem</button>
                    </form>
                </div>
                 <div className="relative isolate overflow-hidden rounded-3xl bg-brand-900 px-6 py-24 sm:py-32 lg:px-8">
                     <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                        <circle cx={512} cy={512} r={512} fill="url(#brand-gradient-contact)" fillOpacity="0.7" />
                        <defs>
                        <radialGradient id="brand-gradient-contact">
                            <stop stopColor="#F97316" />
                            <stop offset={1} stopColor="#0B2B5C" />
                        </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none">
                         <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Nossa localização</h2>
                         <p className="mt-6 text-lg leading-8 text-slate-300">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Suspendisse varius enim in eros elementum tristique.
                         </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
