import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { RenderResult } from '@testing-library/react';

export class ProjectImagesPage extends BasePageClass {
  images: HTMLElement[];
  constructor(result: RenderResult) {
    super(result);
    this.images = result.getAllByRole('img');
  }
}
