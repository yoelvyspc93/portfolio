import { RenderResult } from '@testing-library/react';

export class BasePageClass {
  constructor(protected renderResult: RenderResult) {}

  get container() {
    return this.renderResult.container;
  }
}
