import type { ReactNode } from "react";
import { Info } from "lucide-react";

type AuthStepView = {
  eyebrow: string;
  title: string;
  description: string;
  body: ReactNode;
};

export function AuthStepPresentation({
  view,
  progress,
  error,
  warning,
  onContinueWithoutOptional,
}: {
  view: AuthStepView;
  progress: string;
  error: string;
  warning: boolean;
  onContinueWithoutOptional: () => void;
}) {
  return (
    <section className="flex flex-1 items-center justify-center py-16">
      <div className="w-full max-w-xl">
        <div className="mb-8 flex items-center justify-between text-[11px] font-semibold tracking-[.18em] text-zinc-400">
          <span>{view.eyebrow}</span>
          <span>{progress}</span>
        </div>
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
          <h1 className="max-w-lg text-4xl font-medium tracking-[-.045em] sm:text-6xl">
            {view.title}
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-zinc-500 dark:text-zinc-400">
            {view.description}
          </p>
          <div className="mt-10">{view.body}</div>
          {error && (
            <p
              role="alert"
              className="mt-4 rounded-xl bg-[#fff1ed] px-4 py-3 text-sm text-[#ae4c35] dark:bg-[#ae4c35]/15 dark:text-[#ffb09b]"
            >
              {error}
            </p>
          )}
          {warning && (
            <div
              role="alert"
              className="mt-4 flex items-start gap-3 rounded-xl bg-[#fff3c9] px-4 py-3 text-sm text-[#725a13] dark:bg-[#806914]/20 dark:text-[#f3d879]"
            >
              <Info size={18} className="mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold">This is optional</p>
                <p className="mt-1">You can continue without completing it.</p>
                <button
                  type="button"
                  onClick={onContinueWithoutOptional}
                  className="mt-3 font-semibold underline underline-offset-4"
                >
                  I Know
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}