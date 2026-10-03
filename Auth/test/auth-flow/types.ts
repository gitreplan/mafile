export type AuthMode = "login" | "sign";
export type AccountType = "" | "company" | "user";
export type AuthStep =
  | "username"
  | "password"
  | "type"
  | "company"
  | "name"
  | "email"
  | "phone"
  | "purpose"
  | "companyPassword"
  | "companyImage"
  | "heroImage"
  | "video"
  | "photo"
  | "userPassword"
  | "complete";

export type UploadKind = "companyImage" | "heroImage" | "video" | "photo";

export type AuthForm = {
  username: string;
  password: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  purpose: string;
};

export type AuthFiles = Record<UploadKind, File | null>;
export type AuthFilePreviews = Record<UploadKind, string | null>;

export function createInitialAuthForm(): AuthForm {
  return {
    username: "",
    password: "",
    name: "",
    email: "",
    company: "",
    phone: "",
    purpose: "",
  };
}

export function createEmptyAuthFiles(): AuthFiles {
  return {
    companyImage: null,
    heroImage: null,
    video: null,
    photo: null,
  };
}