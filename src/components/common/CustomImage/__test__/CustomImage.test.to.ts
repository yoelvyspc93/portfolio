import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { RenderResult } from '@testing-library/react';

export class CustomImagePage extends BasePageClass {
  img: HTMLElement;
  constructor(result: RenderResult) {
    super(result);
    this.img = result.getByAltText('logo');
  }
}
