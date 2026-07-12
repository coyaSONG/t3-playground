import * as Sentry from "@sentry/nextjs";

export async function register() {
  Sentry.init({
    dsn:
      process.env.NEXT_PUBLIC_SENTRY_DSN ??
      "https://2f924271cef089c7c5e232155c16c0aa@o4507197398712320.ingest.us.sentry.io/4507197421518848",
    tracesSampleRate: 1,
    debug: false,
  });
}

export const onRequestError = Sentry.captureRequestError;
