import Link from "next/link";
import { CheckCircle2, User, Calendar, Video, MessageSquare } from "lucide-react";

const benefits = [
  {
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: Calendar
  },
  {
    title: "Dolor Sit Amet",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    icon: User
  },
  {
    title: "Consectetur Adipiscing",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    icon: Video
  }
];

const testimonials = [
  {
    name: "Lorem Ipsum",
    role: "Lorem Ipsum",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Dolor Sit",
    role: "Amet Consectetur",
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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
            <div className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-brand-50 backdrop-blur-sm">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-green-400"></span>
              Lorem ipsum dolor sit amet
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Lorem ipsum dolor<br />
              sit amet consectetur.
            </h1>
            <p className="max-w-lg text-lg text-brand-100 md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/cadastro"
                className="rounded-full bg-orange-500 px-8 py-4 text-base font-bold text-white transition hover:bg-orange-600 shadow-lg shadow-orange-500/20"
              >
                Lorem Ipsum
              </Link>
              <Link
                href="/sobre"
                 className="rounded-full border border-white/30 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm hover:bg-white/10"
              >
                Dolor Sit Amet
              </Link>
            </div>
             <p className="text-sm font-medium text-brand-200">
               * Lorem ipsum dolor sit amet
             </p>
          </div>
          <div className="hidden md:block relative">
             {/* Abstract shape or Image placeholder */}
             <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-brand-500 blur-3xl opacity-50"></div>
             <div className="relative z-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-2 backdrop-blur-lg border border-white/20 shadow-2xl skew-y-3 transform hover:skew-y-0 transition duration-700">
                <div className="aspect-square rounded-2xl bg-slate-200 flex items-center justify-center text-slate-400 font-bold text-3xl">
                  Lorem Ipsum
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Lorem Ipsum Dolor</h2>
            <p className="mt-4 text-lg text-slate-600">Consectetur adipiscing elit sed do eiusmod</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="group rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-md hover:-translate-y-1">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
           <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-3xl font-bold text-slate-900 md:text-4xl mb-6">Lorem Ipsum Dolor</h2>
                 <p className="text-lg text-slate-600 mb-8">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 </p>
                 <Link href="/cadastro" className="text-brand-600 font-bold hover:underline inline-flex items-center">
                    Lorem Ipsum <CheckCircle2 className="ml-2 h-4 w-4"/>
                 </Link>
              </div>
              <div className="grid gap-6">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="rounded-3xl bg-slate-50 p-8 border border-slate-100">
                    <p className="text-lg text-slate-700 italic">“{testimonial.quote}”</p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-slate-200"></div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{testimonial.name}</p>
                        <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-700 py-20 text-white">
         <div className="mx-auto max-w-4xl px-4 text-center">
             <h2 className="text-3xl font-bold md:text-5xl">Lorem ipsum dolor sit?</h2>
             <p className="mt-6 text-xl text-brand-100">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
            <div className="mt-10">
              <Link
                href="/cadastro"
                 className="inline-block rounded-full bg-white px-10 py-4 text-lg font-bold text-brand-700 shadow-xl transition hover:bg-gray-100"
              >
                Lorem Ipsum
              </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
