import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { aboutInfo } from '@/constants/about';
import { RenderResult } from '@testing-library/react';

export class AboutModalPage extends BasePageClass {
  first: HTMLElement;
  constructor(result: RenderResult) {
    super(result);
    this.first = result.getByText(aboutInfo.detailedDescriptions[0]);
  }
}
