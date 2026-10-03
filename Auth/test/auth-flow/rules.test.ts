import assert from "node:assert/strict";
import test from "node:test";
import {
  getAuthSteps,
  isOptionalMediaStep,
  validateAuthStep,
  validateUpload,
} from "./rules";
import { createEmptyAuthFiles, createInitialAuthForm } from "./types";

test("returns the expected steps for each account flow", () => {
  assert.deepEqual(getAuthSteps("login", ""), ["username", "password"]);
  assert.deepEqual(getAuthSteps("sign", ""), ["type"]);
  assert.equal(getAuthSteps("sign", "company").at(-1), "complete");
  assert.deepEqual(getAuthSteps("sign", "user"), [
    "type",
    "name",
    "email",
    "photo",
    "userPassword",
    "complete",
  ]);
});

test("validates normalized account details and required uploads", () => {
  const form = createInitialAuthForm();
  const files = createEmptyAuthFiles();
  assert.match(validateAuthStep("username", form, files) ?? "", /3–32/);
  assert.match(validateAuthStep("email", form, files) ?? "", /valid email/);
  assert.match(validateAuthStep("companyImage", form, files) ?? "", /company image/);

  form.username = "alex.morgan";
  form.email = "alex@example.com";
  files.companyImage = {} as File;
  assert.equal(validateAuthStep("username", form, files), null);
  assert.equal(validateAuthStep("email", form, files), null);
  assert.equal(validateAuthStep("companyImage", form, files), null);
});

test("distinguishes optional media from required upload steps", () => {
  assert.equal(isOptionalMediaStep("photo"), true);
  assert.equal(isOptionalMediaStep("video"), true);
  assert.equal(isOptionalMediaStep("heroImage"), false);
});

test("rejects mismatched media and files over the size limit", () => {
  assert.match(
    validateUpload("photo", { type: "video/mp4", size: 1024 }) ?? "",
    /image under 12MB/,
  );
  assert.match(
    validateUpload("video", { type: "video/mp4", size: 13 * 1024 * 1024 }) ?? "",
    /video under 12MB/,
  );
  assert.equal(
    validateUpload("photo", { type: "image/png", size: 1024 }),
    null,
  );
});