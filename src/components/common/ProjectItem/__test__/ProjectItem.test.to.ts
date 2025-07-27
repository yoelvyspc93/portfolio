import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { RenderResult } from '@testing-library/react';

export class ProjectItemPage extends BasePageClass {
  title: HTMLElement;
  constructor(result: RenderResult) {
    super(result);
    this.title = result.getByText('Proj');
  }
}
