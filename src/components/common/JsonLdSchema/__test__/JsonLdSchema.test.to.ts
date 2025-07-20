import { BasePageClass } from '@/lib/test/BasePageClass.to';
import { RenderResult } from '@testing-library/react';

export class JsonLdSchemaPage extends BasePageClass {
  script: HTMLElement | null;
  constructor(result: RenderResult) {
    super(result);
    this.script = document.getElementById('yoelvys-schema');
  }
}
