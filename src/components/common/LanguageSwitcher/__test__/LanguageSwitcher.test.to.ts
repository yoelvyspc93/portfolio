import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { RenderResult } from '@testing-library/react';
import { ButtonTO } from '@/lib/test/Button.to';

export class LanguageSwitcherPage extends BasePageClass {
  en: ButtonTO;
  es: ButtonTO;
  constructor(result: RenderResult) {
    super(result);
    this.en = new ButtonTO(result, 'Switch to English');
    this.es = new ButtonTO(result, 'Switch to Spanish');
  }
}
