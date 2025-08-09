import { getRequestConfig } from 'next-intl/server';
import fs from 'node:fs/promises';
import path from 'node:path';

export async function loadMessages(locale: string) {
  const dir = path.join(process.cwd(), 'public', 'locales', locale);
  const files = await fs.readdir(dir);
  const messages: Record<string, unknown> = {};

  await Promise.all(
    files
      .filter((file) => file.endsWith('.json'))
      .map(async (file) => {
        const content = await fs.readFile(path.join(dir, file), 'utf8');
        messages[path.basename(file, '.json')] = JSON.parse(content);
      }),
  );

  return messages;
}

export default getRequestConfig(async ({ locale }) => {
  const selectedLocale = locale ?? 'en';
  const messages = await loadMessages(selectedLocale);
  return { locale: selectedLocale, messages };
});
