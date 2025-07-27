import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { I18nProvider } from '@/providers/I18nProvider';

export function renderWithProviders(ui: ReactElement) {
  return render(<I18nProvider>{ui}</I18nProvider>);
}
