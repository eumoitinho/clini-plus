import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-900">
          Entre na sua conta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="bg-white px-6 py-12 shadow-sm ring-1 ring-slate-900/5 rounded-3xl sm:px-12">
            <form className="space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-2xl border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-semibold leading-6 text-slate-900">
                    Senha
                  </label>
                  <div className="text-sm">
                    <Link href="/recuperar-senha" className="font-semibold text-brand-600 hover:text-brand-500">
                      Esqueceu a senha?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-2xl border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-3 py-2.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-colors"
                >
                  Entrar <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>

             <p className="mt-10 text-center text-sm text-slate-600">
              Não tem uma conta?{" "}
              <Link href="/cadastro" className="font-semibold leading-6 text-brand-600 hover:text-brand-500">
                Cadastre-se gratuitamente
              </Link>
            </p>
        </div>
      </div>
    </div>
  );
}
