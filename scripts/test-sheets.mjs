import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env.local") });

const endpoint =
  "http://127.0.0.1:7532/ingest/29cbe75d-ff03-4032-a030-309664d94d71";

function log(hypothesisId, message, data) {
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "d5b973",
    },
    body: JSON.stringify({
      sessionId: "d5b973",
      runId: "script",
      hypothesisId,
      location: "scripts/test-sheets.mjs",
      message,
      data,
      timestamp: Date.now(),
    }),
  }).catch(() => {});
}

try {
  const { addRowToSheet } = await import("../src/libs/google-sheets.js");
  await log("H3", "Starting addRowToSheet", {});
  await addRowToSheet({
    name: "Debug Test",
    email: "debug@test.com",
    phone: "",
    message: "script test",
  });
  await log("H3", "addRowToSheet success", { ok: true });
  console.log("SHEETS: OK");
} catch (e) {
  await log("H3", "addRowToSheet failed", {
    ok: false,
    errorMessage: e?.message || String(e),
    errorName: e?.name,
  });
  console.log("SHEETS: FAIL", e?.message || e);
  process.exit(1);
}
