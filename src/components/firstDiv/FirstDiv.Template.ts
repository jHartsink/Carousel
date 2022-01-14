import type { ComponentTemplateResult } from '@muban/template';
import { html } from '@muban/template';

export function firstDivTemplate(ref: string): ComponentTemplateResult {
  return html`
    <div data-ref=${ref} class="flex ">
      <div class="firstDiv"></div>
      <div class="secondDiv"></div>
      <div class="thirdDiv"></div>
    </div>
  `;
}
