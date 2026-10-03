
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
