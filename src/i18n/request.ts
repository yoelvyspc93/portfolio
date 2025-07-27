import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const messagesModule = await import(`../messages/${locale ?? 'en'}.json`);
  return {
    locale: locale ?? 'en',
    messages: messagesModule.default,
  };
});
