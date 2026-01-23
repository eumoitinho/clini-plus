import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    question: "Duis aute irure dolor in reprehenderit in voluptate?",
    answer: "Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    question: "Excepteur sint occaecat cupidatat non proident?",
    answer: "Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
  },
  {
    question: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur?",
    answer: "Aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
  }
];

export default function FAQPage() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">F.A.Q</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Frequently asked questions</p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
        </p>
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
