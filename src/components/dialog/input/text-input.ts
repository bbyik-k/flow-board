import { BaseComponent } from '../../component.js';
import { TextData } from '../dialog.js';

export class TextSectionInput extends BaseComponent<HTMLElement> implements TextData {
  constructor(placeholder: string = '내용을 입력해 주세요.') {
    super(`<div>
            <div class="form__container">
              <label for="title">Title</label>
              <input id="title" type="text" placeholder="Title을 작성해 주세요."/>
            </div>
            <div class="form__container">
              <label for="body">Body</label>
              <textarea id="body" type="text" row="3" /></textarea>
            </div>
          </div>`);
    const textAreaElement = this.element.querySelector('#body')! as HTMLTextAreaElement;
    textAreaElement.placeholder = placeholder;
  }

  get title(): string {
    const element = this.element.querySelector('#title')! as HTMLInputElement;
    return element.value;
  }
  get body(): string {
    const element = this.element.querySelector('#body')! as HTMLTextAreaElement;
    return element.value;
  }
}
