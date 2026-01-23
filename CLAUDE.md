# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CLINIPLUS is a telemedicine platform built with Next.js 14 App Router, enabling video consultations between patients and healthcare professionals.

## Development Commands

```bash
bun dev          # Start development server
bun build        # Production build
bun start        # Start production server
bun lint         # Run ESLint
```

Prisma commands:
```bash
bunx prisma generate    # Generate Prisma client
bunx prisma db push     # Push schema changes to database
bunx prisma studio      # Open database GUI
```

## Architecture

### Route Groups (src/app/)

- `(site)/` - Public marketing pages (home, about, plans, contact, FAQ, privacy, terms)
- `(auth)/` - Authentication flows (login, cadastro, recuperar-senha)
- `(dashboard)/` - Protected user areas by role (admin, paciente, profissional)
- `api/` - REST API endpoints
- `checkout/` - Payment flow
- `consulta/[id]/` - Individual consultation pages

### Key Integrations (src/lib/)

| Directory | Service | Purpose |
|-----------|---------|---------|
| `auth/` | NextAuth v5 | Authentication with Azure AD B2C |
| `azure/` | Azure Blob Storage + SignalR | File storage and real-time messaging |
| `db/` | Prisma | PostgreSQL ORM |
| `pagarme/` | Pagar.me | Payment processing (PIX, card, boleto) |
| `resend/` | Resend | Transactional emails |
| `twilio/` | Twilio Video | Video call token generation |

### State Management

- **Zustand** (`src/stores/`) - Global client state
- **React Hook Form** - Form state with Zod validation
- **TanStack Query** - Server state and data fetching

### Database Models (prisma/schema.prisma)

Core entities: Usuario, Paciente, Profissional, Disponibilidade, Agendamento, Consulta, Pagamento, Mensagem, Documento

User types: `PACIENTE`, `PROFISSIONAL`, `ADMIN`

## Code Conventions

- Path alias: `@/*` maps to `src/*`
- Tailwind CSS with custom `brand` color palette (blue tones)
- Custom font: Outfit (configured in layout.tsx)
- TypeScript strict mode enabled
- Typed routes via `experimental.typedRoutes`

## Documentation

The `/docs` directory contains a Nextra-powered documentation site with API reference and feature documentation.
