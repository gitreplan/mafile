

export default function AuthExperienceClient() {
  const flow = useAuthFlow();
  const touchStartRef = useRef<number | null>(null);

  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    touchStartRef.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartRef.current === null) return;

    const touchEnd = event.changedTouches[0]?.clientX;
    const delta = touchEnd === undefined ? 0 : touchEnd - touchStartRef.current;
    touchStartRef.current = null;

    if (Math.abs(delta) <= 70) return;
    if (delta < 0) flow.next();
    else flow.back();
  }

  function handleHorizontalScroll(event: React.WheelEvent<HTMLDivElement>) {
    if (
      Math.abs(event.deltaX) <= Math.abs(event.deltaY) ||
      Math.abs(event.deltaX) < 30
    ) {
      return;
    }

    event.preventDefault();
    if (event.deltaX > 0) flow.back();
    else flow.next();
  }

  return (
    <div
      className="flex flex-1 flex-col"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onWheel={handleHorizontalScroll}
    >
      <AuthTools onReset={flow.reset} onSwitchMode={flow.switchMode} />
      <AuthStepForm
        key={`${flow.mode}-${flow.accountType}-${flow.stepIndex}`}
        mode={flow.mode}
        accountType={flow.accountType}
        currentStep={flow.currentStep}
        progress={flow.progress}
        form={flow.form}
        filePreviews={flow.filePreviews}
        error={flow.error}
        warning={flow.warning}
        onChangeField={flow.updateField}
        onChooseAccountType={flow.chooseAccountType}
        onSelectFile={flow.setFile}
        onRemoveFile={flow.removeFile}
        onContinueWithoutOptional={flow.next}
      />
      <footer className="flex items-center justify-between border-t border-black/5 pt-5 dark:border-white/10">
        <button
          type="button"
          onClick={flow.back}
          disabled={flow.stepIndex === 0}
          className="flex items-center gap-2 rounded-full px-1 py-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-900 disabled:invisible dark:hover:text-white"
        >
          <ArrowLeft size={17} /> Back
        </button>
        <button
          type="button"
          onClick={flow.next}
          className="flex items-center gap-3 rounded-full bg-[#242329] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#3a3942] dark:bg-white dark:text-[#242329] dark:hover:bg-zinc-200"
        >
          {flow.currentStep === "password" ? (
            <LockKeyholeOpen size={18} />
          ) : flow.currentStep === "complete" ? (
            "Complete"
          ) : flow.warning ? (
            "I Know"
          ) : (
            "Next"
          )}
          {flow.currentStep !== "password" &&
            flow.currentStep !== "complete" &&
            !flow.warning && <ArrowRight size={17} />}
        </button>
      </footer>
    </div>
  );
}