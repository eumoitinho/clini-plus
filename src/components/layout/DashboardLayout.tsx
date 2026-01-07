import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar";

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
      <Sidebar />
      <div className="rounded-2xl border border-slate-200 p-6">{children}</div>
    </div>
  );
}
