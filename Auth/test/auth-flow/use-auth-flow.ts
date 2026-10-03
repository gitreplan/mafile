"use client";

import { useEffect, useRef, useState } from "react";
import {
  createEmptyAuthFiles,
  createInitialAuthForm,
  type AccountType,
  type AuthFilePreviews,
  type AuthFiles,
  type AuthForm,
  type AuthMode,
  type AuthStep,
  type UploadKind,
} from "./types";
import {
  getAuthSteps,
  isOptionalMediaStep,
  validateAuthStep,
  validateUpload,
} from "./rules";

export function useAuthFlow() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [accountType, setAccountType] = useState<AccountType>("");
  const [stepIndex, setStepIndex] = useState(0);
  const [form, setForm] = useState<AuthForm>(createInitialAuthForm);
  const [files, setFiles] = useState<AuthFiles>(createEmptyAuthFiles);
  const emptyPreviews = {
    companyImage: null,
    heroImage: null,
    video: null,
    photo: null,
  };
  const previewUrlsRef = useRef<AuthFilePreviews>(emptyPreviews);
  const [filePreviews, setFilePreviews] =
    useState<AuthFilePreviews>(emptyPreviews);
  const [error, setError] = useState("");
  const [warning, setWarning] = useState(false);

  const steps = getAuthSteps(mode, accountType);
  const currentStep: AuthStep = steps[stepIndex] ?? steps[0];

  useEffect(
    () => () => {
      Object.values(previewUrlsRef.current).forEach((url) => {
        if (url) URL.revokeObjectURL(url);
      });
    },
    [],
  );

  function clearPreviews() {
    Object.values(previewUrlsRef.current).forEach((url) => {
      if (url) URL.revokeObjectURL(url);
    });
    previewUrlsRef.current = { ...emptyPreviews };
    setFilePreviews({ ...emptyPreviews });
  }

  function updateField(key: keyof AuthForm, value: string) {
    setForm((previous) => ({ ...previous, [key]: value }));
    setError("");
  }

  function chooseAccountType(nextAccountType: Exclude<AccountType, "">) {
    setAccountType(nextAccountType);
    setError("");
  }

  function reset(nextMode: AuthMode = mode) {
    setMode(nextMode);
    setAccountType("");
    setStepIndex(0);
    setForm(createInitialAuthForm());
    setFiles(createEmptyAuthFiles());
    clearPreviews();
    setError("");
    setWarning(false);
  }

  function setFile(kind: UploadKind, file: File | undefined) {
    if (!file) return;

    const validationError = validateUpload(kind, file);
    if (validationError) {
      setError(validationError);
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    const previousUrl = previewUrlsRef.current[kind];
    if (previousUrl) URL.revokeObjectURL(previousUrl);
    const nextPreviews = { ...previewUrlsRef.current, [kind]: previewUrl };
    previewUrlsRef.current = nextPreviews;
    setFilePreviews(nextPreviews);
    setFiles((previous) => ({ ...previous, [kind]: file }));
    setError("");
  }

  function removeFile(kind: UploadKind) {
    const previousUrl = previewUrlsRef.current[kind];
    if (previousUrl) URL.revokeObjectURL(previousUrl);
    const nextPreviews = { ...previewUrlsRef.current, [kind]: null };
    previewUrlsRef.current = nextPreviews;
    setFilePreviews(nextPreviews);
    setFiles((previous) => ({ ...previous, [kind]: null }));
    setError("");
  }

  function advance() {
    setError("");
    setWarning(false);
    setStepIndex((previous) => Math.min(previous + 1, steps.length - 1));
  }

  function next() {
    if (warning) {
      advance();
      return;
    }

    if (currentStep === "type") {
      if (!accountType) {
        setError("Choose Company or User to continue.");
        return;
      }
      advance();
      return;
    }

    if (
      isOptionalMediaStep(currentStep) &&
      ((currentStep === "photo" && !files.photo) ||
        (currentStep === "video" && !files.video))
    ) {
      setWarning(true);
      setError("");
      return;
    }

    const validationError = validateAuthStep(currentStep, form, files);
    if (validationError) {
      setError(validationError);
      return;
    }

    advance();
  }

  function back() {
    setError("");
    setWarning(false);
    setStepIndex((previous) => Math.max(0, previous - 1));
  }

  function switchMode(nextMode: AuthMode) {
    reset(nextMode);
  }

  return {
    mode,
    accountType,
    steps,
    stepIndex,
    currentStep,
    progress: `${stepIndex + 1} / ${steps.length}`,
    form,
    files,
    filePreviews,
    error,
    warning,
    updateField,
    chooseAccountType,
    setFile,
    removeFile,
    next,
    back,
    reset,
    switchMode,
  };
}