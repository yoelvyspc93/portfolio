import { useCallback, useEffect, useState } from 'react';

const to = 'yoelvyspc93@gmail.com';
const subject = 'Contact from portfolio';

export const useMailTo = () => {
  const [mailTo, setMailto] = useState<string | null>(null);

  const generateMailTo = useCallback(
    ({ email, message }: { email: string; message: string }) => {
      const encodedTo = encodeURIComponent(to);
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(email + ', ' + message);

      const url = `mailto:${encodedTo}?subject=${encodedSubject}&body=${encodedBody}`;
      setMailto(url);
    },
    [],
  );

  useEffect(() => {
    if (mailTo) {
      globalThis.location.href = mailTo;
      setMailto(null);
    }
  }, [mailTo]);

  return { generateMailTo };
};
