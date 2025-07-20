import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { RenderResult } from '@testing-library/react';

export class NavigatorPage extends BasePageClass {
  nav: HTMLElement;
  constructor(result: RenderResult) {
    super(result);
    this.nav = result.getByRole('navigation');
  }
}
