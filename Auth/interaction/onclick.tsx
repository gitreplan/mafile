
function FileUploadField({
  kind,
  label,
  accept,
  preview,
  onSelectFile,
  onRemoveFile,
}: {
  kind: UploadKind;
  label: string;
  accept: string;
  preview: string | null;
  onSelectFile: (kind: UploadKind, file: File | undefined) => void;
  onRemoveFile: (kind: UploadKind) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full">
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(event) => {
          onSelectFile(kind, event.currentTarget.files?.[0]);
          event.currentTarget.value = "";
        }}
      />
      {preview ? (
        <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5">
          <div className="relative aspect-[16/8]">
            {kind === "video" ? (
              <video
                src={preview}
                controls
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src={preview}
                alt={`${label} preview`}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, 560px"
                className="object-cover"
              />
            )}
          </div>
          <button
            type="button"
            aria-label={`Remove ${label}`}
            onClick={() => onRemoveFile(kind)}
            className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-zinc-700 shadow-sm transition hover:scale-105 dark:bg-zinc-900/90 dark:text-white"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="group flex w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-black/15 bg-white/40 px-6 py-10 text-center transition hover:border-[#7d6df2] hover:bg-white dark:border-white/15 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
        >
          <span className="rounded-full bg-[#eeecff] p-3 text-[#6658d8] dark:bg-[#6658d8]/20 dark:text-[#b8b0ff]">
            <Upload size={19} />
          </span>
          <span className="text-sm font-medium">
            Choose {label.toLowerCase()}
          </span>
          <span className="text-xs text-zinc-500">
            {kind === "video" ? "Video" : "PNG, JPG"} up to 12MB
          </span>
        </button>
      )}
    </div>
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