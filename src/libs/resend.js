import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const debugEndpoint = "http://127.0.0.1:7532/ingest/29cbe75d-ff03-4032-a030-309664d94d71";

function debugLog(payload) {
  // #region agent log
  return fetch(debugEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "58b4a4",
    },
    body: JSON.stringify({
      sessionId: "58b4a4",
      runId: "initial",
      ...payload,
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion
}

await debugLog({
  hypothesisId: "H1",
  location: "src/libs/resend.js:24",
  message: "Evaluando RESEND_API_KEY en modulo resend",
  data: {
    hasResendApiKey: Boolean(resendApiKey),
    resendApiKeyLength: resendApiKey?.length ?? 0,
    hasResendFromEmail: Boolean(process.env.RESEND_FROM_EMAIL),
    nodeEnv: process.env.NODE_ENV || null,
    processCwd: process.cwd(),
  },
});

let resend;
try {
  resend = new Resend(resendApiKey);
  await debugLog({
    hypothesisId: "H2",
    location: "src/libs/resend.js:39",
    message: "Constructor de Resend creado correctamente",
    data: {
      constructorSucceeded: true,
    },
  });
} catch (error) {
  await debugLog({
    hypothesisId: "H3",
    location: "src/libs/resend.js:47",
    message: "Fallo en constructor de Resend",
    data: {
      constructorSucceeded: false,
      errorMessage: error instanceof Error ? error.message : "unknown",
      hasResendApiKey: Boolean(resendApiKey),
      resendApiKeyLength: resendApiKey?.length ?? 0,
    },
  });
  throw error;
}

export { resend };
