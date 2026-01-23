export default function SobrePage() {
  return (
    <div className="flex flex-col">
       {/* Simple Hero */}
       <section className="bg-brand-700 py-20 text-center text-white">
         <div className="mx-auto max-w-4xl px-4">
           <h1 className="text-4xl font-extrabold md:text-5xl">Sobre a CLINIPLUS</h1>
           <p className="mt-4 text-xl text-brand-100 max-w-2xl mx-auto">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
           </p>
         </div>
       </section>

       {/* Content */}
       <section className="mx-auto max-w-5xl px-4 py-20">
         <div className="grid gap-16 md:grid-cols-2 items-start">
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
               <h2 className="text-3xl font-bold text-slate-900">Nossa Missão</h2>
               <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
               </p>
               <p>
                 Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
               </p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-8 text-center md:p-12">
               <h3 className="text-2xl font-bold text-slate-900">Nossos Valores</h3>
               <ul className="mt-8 space-y-4 text-left inline-block">
                  <li className="flex items-center gap-3">
                     <span className="h-2 w-2 rounded-full bg-brand-500"></span>
                     <span className="font-medium text-slate-700">Lorem ipsum dolor sit</span>
                  </li>
                  <li className="flex items-center gap-3">
                     <span className="h-2 w-2 rounded-full bg-brand-500"></span>
                     <span className="font-medium text-slate-700">Consectetur adipiscing elit</span>
                  </li>
                   <li className="flex items-center gap-3">
                     <span className="h-2 w-2 rounded-full bg-brand-500"></span>
                     <span className="font-medium text-slate-700">Sed do eiusmod tempor</span>
                  </li>
                   <li className="flex items-center gap-3">
                     <span className="h-2 w-2 rounded-full bg-brand-500"></span>
                     <span className="font-medium text-slate-700">Incididunt ut labore</span>
                  </li>
               </ul>
            </div>
         </div>
       </section>
    </div>
  );
}
