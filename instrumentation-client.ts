import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn:
    process.env.NEXT_PUBLIC_SENTRY_DSN ??
    "https://2f924271cef089c7c5e232155c16c0aa@o4507197398712320.ingest.us.sentry.io/4507197421518848",
  tracesSampleRate: 1,
  debug: false,
  replaysOnErrorSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
