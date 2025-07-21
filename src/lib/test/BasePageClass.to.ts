import { RenderResult } from '@testing-library/react';

// Base class for page object helpers.
// Testing utilities like `renderWithProviders` should be invoked only
// in the actual test files (`*.test.tsx`) and never from these helpers.

export class BasePageClass {
  constructor(protected renderResult: RenderResult) {}

  get container() {
    return this.renderResult.container;
  }
}
