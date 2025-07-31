import DOMPurify from 'isomorphic-dompurify';

export const sanitizeHtml = (dirty: string) => DOMPurify.sanitize(dirty);
