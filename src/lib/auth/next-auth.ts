import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/db/prisma";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  const hash = await hashPassword(password);
  return hash === hashedPassword;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const { email, password } = parsed.data;

        const user = await prisma.usuario.findUnique({
          where: { email },
          include: { paciente: true, profissional: true }
        });

        if (!user || !user.senha) return null;

        const isValid = await verifyPassword(password, user.senha);
        if (!isValid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.nome,
          tipo: user.tipo,
          pacienteId: user.paciente?.id,
          profissionalId: user.profissional?.id
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.tipo = (user as { tipo?: string }).tipo;
        token.pacienteId = (user as { pacienteId?: string }).pacienteId;
        token.profissionalId = (user as { profissionalId?: string }).profissionalId;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        (session.user as { tipo?: string }).tipo = token.tipo as string;
        (session.user as { pacienteId?: string }).pacienteId = token.pacienteId as string;
        (session.user as { profissionalId?: string }).profissionalId = token.profissionalId as string;
      }
      return session;
    }
  }
});
