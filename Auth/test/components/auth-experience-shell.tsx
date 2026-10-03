import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

export function AuthExperienceShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f4] text-[#202124] dark:bg-[#151516] dark:text-[#f5f4f0]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-5 sm:px-8 sm:py-7">
        <header className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-xl bg-[#242329] text-white dark:bg-white dark:text-[#242329]">
            <Sparkles size={16} />
          </div>
          <span className="text-sm font-semibold tracking-tight">mafile</span>
        </header>
        {children}
      </div>
    </main>
  );
}