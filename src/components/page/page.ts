import { BaseComponent } from '../component.js';

export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul>This is Page Components</ul>');
    this.element.classList.add('page');
  }
}
