import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { Upload, X } from "lucide-react";
import { AuthStepPresentation } from "./auth-step-presentation";
import { Choice, Field } from "./auth-fields";
import type {
  AccountType,
  AuthFilePreviews,
  AuthForm,
  AuthMode,
  AuthStep,
  UploadKind,
} from "../auth-flow/types";

type AuthStepView = {
  eyebrow: string;
  title: string;
  description: string;
  body: ReactNode;
};

type AuthStepFormProps = {
  mode: AuthMode;
  accountType: AccountType;
  currentStep: AuthStep;
  progress: string;
  form: AuthForm;
  filePreviews: AuthFilePreviews;
  error: string;
  warning: boolean;
  onChangeField: (key: keyof AuthForm, value: string) => void;
  onChooseAccountType: (accountType: Exclude<AccountType, "">) => void;
  onSelectFile: (kind: UploadKind, file: File | undefined) => void;
  onRemoveFile: (kind: UploadKind) => void;
  onContinueWithoutOptional: () => void;
};

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

export function AuthStepForm({
  mode,
  accountType,
  currentStep,
  progress,
  form,
  filePreviews,
  error,
  warning,
  onChangeField,
  onChooseAccountType,
  onSelectFile,
  onRemoveFile,
  onContinueWithoutOptional,
}: AuthStepFormProps) {
  const commonEyebrow =
    mode === "login"
      ? "WELCOME BACK"
      : accountType
        ? `CREATE YOUR ${accountType.toUpperCase()}`
        : "NEW TO MAFILE";

  function fileField(kind: UploadKind, label: string, accept: string) {
    return (
      <FileUploadField
        kind={kind}
        label={label}
        accept={accept}
        preview={filePreviews[kind]}
        onSelectFile={onSelectFile}
        onRemoveFile={onRemoveFile}
      />
    );
  }

  let view: AuthStepView;

  if (currentStep === "username") {
    view = {
      eyebrow: commonEyebrow,
      title: "What is your username?",
      description: "Enter the name you use to access your Mafile space.",
      body: (
        <Field
          label="Username"
          value={form.username}
          onChange={(value) => onChangeField("username", value)}
          placeholder="your-username"
          autoFocus
        />
      ),
    };
  } else if (
    currentStep === "password" ||
    currentStep === "userPassword" ||
    currentStep === "companyPassword"
  ) {
    view = {
      eyebrow: commonEyebrow,
      title: currentStep === "password" ? "Unlock your space." : "Make it yours.",
      description: "A strong password keeps your space private and personal.",
      body: (
        <Field
          label="Password"
          type="password"
          value={form.password}
          onChange={(value) => onChangeField("password", value)}
          placeholder="At least 8 characters"
          autoFocus
        />
      ),
    };
  } else if (currentStep === "type") {
    view = {
      eyebrow: "SET UP YOUR SPACE",
      title: "Pick your type.",
      description: "Choose the path that best fits how you’ll use Mafile.",
      body: (
        <div className="grid gap-3 sm:grid-cols-2">
          <Choice
            selected={accountType === "company"}
            onClick={() => onChooseAccountType("company")}
            title="Company"
            text="Build a space for your team or brand."
            badge="Recommended"
          />
          <Choice
            selected={accountType === "user"}
            onClick={() => onChooseAccountType("user")}
            title="User"
            text="Create a personal space for yourself."
            badge="Only User"
          />
        </div>
      ),
    };
  } else if (currentStep === "company") {
    view = {
      eyebrow: commonEyebrow,
      title: "What should we call your company?",
      description: "This name will shape your public Mafile space.",
      body: (
        <Field
          label="Company name"
          value={form.company}
          onChange={(value) => onChangeField("company", value)}
          placeholder="Acme Studio"
          autoFocus
        />
      ),
    };
  } else if (currentStep === "name") {
    view = {
      eyebrow: commonEyebrow,
      title: "What should we call you?",
      description: "Use the name you’d like people to see.",
      body: (
        <Field
          label="Your name"
          value={form.name}
          onChange={(value) => onChangeField("name", value)}
          placeholder="Alex Morgan"
          autoFocus
        />
      ),
    };
  } else if (currentStep === "email") {
    view = {
      eyebrow: commonEyebrow,
      title: "Where can we reach you?",
      description: "We’ll use this for account updates and nothing noisy.",
      body: (
        <Field
          label="Email address"
          type="email"
          value={form.email}
          onChange={(value) => onChangeField("email", value)}
          placeholder="you@example.com"
          autoFocus
        />
      ),
    };
  } else if (currentStep === "phone") {
    view = {
      eyebrow: commonEyebrow,
      title: "What’s your phone number?",
      description: "A reliable way to keep your company account secure.",
      body: (
        <Field
          label="Phone number"
          type="tel"
          value={form.phone}
          onChange={(value) => onChangeField("phone", value)}
          placeholder="+1 555 000 0000"
          autoFocus
        />
      ),
    };
  } else if (currentStep === "purpose") {
    view = {
      eyebrow: commonEyebrow,
      title: "What are you here for?",
      description: "Choose the closest fit. You can refine this later.",
      body: (
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Company purpose</span>
          <select
            value={form.purpose}
            onChange={(event) => onChangeField("purpose", event.target.value)}
            className="h-14 w-full rounded-xl border border-black/10 bg-white/60 px-4 text-base outline-none transition focus:border-[#7569df] focus:ring-4 focus:ring-[#7569df]/10 dark:border-white/10 dark:bg-white/[0.05]"
          >
            <option value="">Select a purpose</option>
            <option>Showcase our work</option>
            <option>Meet new customers</option>
            <option>Grow our community</option>
            <option>Something else</option>
          </select>
        </label>
      ),
    };
  } else if (currentStep === "companyImage") {
    view = {
      eyebrow: commonEyebrow,
      title: "Give your company a face.",
      description: "Add a logo or image people will recognize.",
      body: fileField("companyImage", "company image", "image/*"),
    };
  } else if (currentStep === "heroImage") {
    view = {
      eyebrow: commonEyebrow,
      title: "Set the first impression.",
      description: "A wide image helps your Mafile space feel like home.",
      body: fileField("heroImage", "hero image", "image/*"),
    };
  } else if (currentStep === "video") {
    view = {
      eyebrow: commonEyebrow,
      title: "Say hello, your way.",
      description: "An intro video is optional, but it makes your space feel alive.",
      body: fileField("video", "intro video", "video/*"),
    };
  } else if (currentStep === "photo") {
    view = {
      eyebrow: commonEyebrow,
      title: "Add a photo, if you’d like.",
      description: "This is optional. You can always add one later.",
      body: fileField("photo", "profile photo", "image/*"),
    };
  } else {
    view = {
      eyebrow: "ALL SET",
      title: mode === "login" ? "Ready when you are." : "Your space starts here.",
      description:
        "Your details are ready to connect to Mafile. The final action will be linked to your secure account service.",
      body: (
        <div className="flex items-center gap-3 rounded-2xl bg-[#eeecff] px-4 py-4 text-sm text-[#4b438e] dark:bg-[#6658d8]/15 dark:text-[#c8c3ff]">
          Nothing else to fill in.
        </div>
      ),
    };
  }

  return (
    <AuthStepPresentation
      view={view}
      progress={progress}
      error={error}
      warning={warning}
      onContinueWithoutOptional={onContinueWithoutOptional}
    />
  );
}