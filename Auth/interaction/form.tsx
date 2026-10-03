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