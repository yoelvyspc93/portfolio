import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { LanguageSwitcher } from '..';
import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { RenderResult } from '@testing-library/react';
import { ButtonTO } from '@/lib/test/Button.to';

class LanguageSwitcherPage extends BasePageClass {
  en: ButtonTO;
  es: ButtonTO;
  constructor(result: RenderResult) {
    super(result);
    this.en = new ButtonTO(result, 'Switch to English');
    this.es = new ButtonTO(result, 'Switch to Spanish');
  }
}

describe('LanguageSwitcher PO', () => {
  it('exposes language buttons', () => {
    const page = new LanguageSwitcherPage(renderWithProviders(<LanguageSwitcher />));
    expect(page.en.element).toBeInTheDocument();
    expect(page.es.element).toBeInTheDocument();
  });
});
