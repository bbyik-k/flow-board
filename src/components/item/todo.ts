import { BaseComponent } from '../component.js';

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="todo">
            <h2 class="page-item__title todo__title"></h2>
            <input type="checkbox" id="todo-checkbox" />
            <lable for="todo-checkbox" class="todo-lable"></lable>
          </section>`);

    const titleElement = this.element.querySelector('.todo__title')! as HTMLHeadingElement;
    titleElement.textContent = title;

    const todoElement = this.element.querySelector('.todo-lable')! as HTMLInputElement;
    todoElement.textContent = todo;
  }
}
