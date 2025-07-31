import { sanitizeHtml } from '../sanitizeHtml';

test('sanitizes malicious html', () => {
  const dirty = '<img src=x onerror=alert(1)><script>alert(1)</script>';
  expect(sanitizeHtml(dirty)).toBe('<img src="x">');
});
