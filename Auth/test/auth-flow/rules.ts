import type {
  AccountType,
  AuthFiles,
  AuthForm,
  AuthMode,
  AuthStep,
  UploadKind,
} from "./types";

const COMPANY_STEPS: AuthStep[] = [
  "type",
  "company",
  "email",
  "phone",
  "purpose",
  "companyPassword",
  "companyImage",
  "heroImage",
  "video",
  "complete",
];

const USER_STEPS: AuthStep[] = [
  "type",
  "name",
  "email",
  "photo",
  "userPassword",
  "complete",
];

export function getAuthSteps(
  mode: AuthMode,
  accountType: AccountType,
): AuthStep[] {
  if (mode === "login") return ["username", "password"];
  if (!accountType) return ["type"];
  return accountType === "company" ? [...COMPANY_STEPS] : [...USER_STEPS];
}

export function validateAuthStep(
  step: AuthStep,
  form: AuthForm,
  files: AuthFiles,
): string | null {
  if (
    step === "username" &&
    !/^[a-zA-Z0-9._-]{3,32}$/.test(form.username.trim())
  ) {
    return "Use 3–32 letters, numbers, dots, dashes, or underscores.";
  }

  if (
    (step === "password" ||
      step === "userPassword" ||
      step === "companyPassword") &&
    form.password.length < 8
  ) {
    return "Use at least 8 characters for your password.";
  }

  if (
    step === "email" &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
  ) {
    return "Enter a valid email address, like hello@mafile.com.";
  }

  if (step === "name" && !/^[\p{L}][\p{L}\s'-]{1,59}$/u.test(form.name.trim())) {
    return "Enter a name with at least 2 letters.";
  }

  if (
    step === "company" &&
    !/^[\p{L}\p{N}][\p{L}\p{N}\s&.'-]{1,79}$/u.test(form.company.trim())
  ) {
    return "Enter a company name between 2 and 80 characters.";
  }

  if (step === "phone" && !/^\+?[\d\s().-]{7,20}$/.test(form.phone.trim())) {
    return "Enter a phone number with a valid country code or area code.";
  }

  if (step === "purpose" && !form.purpose) {
    return "Choose what your company is here to do.";
  }

  if (step === "companyImage" && !files.companyImage) {
    return "Add a company image to continue.";
  }

  if (step === "heroImage" && !files.heroImage) {
    return "Add a hero image to continue.";
  }

  return null;
}

export function validateUpload(
  kind: UploadKind,
  file: Pick<File, "type" | "size">,
): string | null {
  const isVideo = kind === "video";
  const correctType = isVideo
    ? file.type.startsWith("video/")
    : file.type.startsWith("image/");

  if (!correctType || file.size > 12 * 1024 * 1024) {
    return `Choose a ${isVideo ? "video" : "image"} under 12MB.`;
  }

  return null;
}

export function isOptionalMediaStep(step: AuthStep): boolean {
  return step === "photo" || step === "video";
}