import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { RenderResult } from '@testing-library/react';

export class HeaderCardPage extends BasePageClass {
  number: HTMLElement;
  constructor(result: RenderResult) {
    super(result);
    this.number = result.getByText('01');
  }
}
