export function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  autoFocus = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  autoFocus?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      <input
        autoFocus={autoFocus}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-14 w-full rounded-xl border border-black/10 bg-white/60 px-4 text-base outline-none transition placeholder:text-zinc-400 focus:border-[#7569df] focus:ring-4 focus:ring-[#7569df]/10 dark:border-white/10 dark:bg-white/[0.05]"
      />
    </label>
  );
}

export function Choice({
  selected,
  onClick,
  title,
  text,
  badge,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  text: string;
  badge: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative rounded-2xl border p-5 text-left transition ${selected ? "border-[#7569df] bg-[#eeecff] ring-4 ring-[#7569df]/10 dark:bg-[#6658d8]/15" : "border-black/10 bg-white/50 hover:border-black/25 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/25"}`}
    >
      <span className="absolute right-4 top-4 rounded-full bg-white/70 px-2 py-1 text-[10px] font-semibold text-zinc-500 dark:bg-black/20 dark:text-zinc-300">
        {badge}
      </span>
      <span className="mb-8 block size-5 rounded-full border border-current p-1 text-[#7569df]">
        {selected && (
          <span className="block size-full rounded-full bg-current" />
        )}
      </span>
      <span className="block text-lg font-medium">{title}</span>
      <span className="mt-2 block max-w-[15rem] text-sm leading-6 text-zinc-500 dark:text-zinc-400">
        {text}
      </span>
    </button>
  );
}