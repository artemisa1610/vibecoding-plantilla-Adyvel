import { readFileSync } from "fs";
import { resolve } from "path";

const envPath = resolve(process.cwd(), ".env.local");
let raw = "";
try {
  raw = readFileSync(envPath, "utf8");
} catch (e) {
  console.log("ENV_FILE: missing");
  process.exit(1);
}

const keys = [
  "RESEND_API_KEY",
  "RESEND_FROM_EMAIL",
  "GOOGLE_SERVICE_ACCOUNT_EMAIL",
  "GOOGLE_PRIVATE_KEY",
  "GOOGLE_SHEET_ID",
  "ADMIN_PASSWORD",
];

for (const key of keys) {
  const match = raw.match(new RegExp(`^${key}=(.*)$`, "m"));
  if (!match) {
    console.log(`${key}: MISSING`);
    continue;
  }
  const val = match[1].trim();
  const unquoted = val.replace(/^["']|["']$/g, "");
  console.log(`${key}: set len=${unquoted.length}`);
  if (key === "GOOGLE_PRIVATE_KEY") {
    console.log(`  literal\\\\n: ${unquoted.includes("\\n")}`);
    console.log(`  realNewline: ${unquoted.includes("\n")}`);
    console.log(`  beginsWithBEGIN: ${unquoted.includes("BEGIN PRIVATE KEY")}`);
  }
}
