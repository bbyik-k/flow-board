import { BaseComponent } from '../../component.js';
import { MediaData } from '../dialog.js';

export class MediaSectionInput extends BaseComponent<HTMLElement> implements MediaData {
  constructor(placeholder: string = '미디어 URL을 입력해 주세요.') {
    super(`<div>
            <div class="form__container">
              <label for="title">Title</label>
              <input id="title" type="text" placeholder="Title을 작성해 주세요." />
            </div>
            <div class="form__container">
              <label for="url">URL</label>
              <input id="url" type="text" />
            </div>
          </div>`);
    const urlInputElement = this.element.querySelector('#url')! as HTMLTextAreaElement;
    urlInputElement.placeholder = placeholder;
    // 🔹 포커스 시 placeholder 값을 입력값으로 설정하고 전체 선택
    urlInputElement.addEventListener('focus', function () {
      if (!this.value) {
        this.value = placeholder; // 기본값 자동 입력
      }
      this.select(); // 전체 선택 (새로운 URL을 쉽게 입력할 수 있도록)
    });
  }

  get title(): string {
    const element = this.element.querySelector('#title')! as HTMLInputElement;
    return element.value;
  }
  get url(): string {
    const element = this.element.querySelector('#url')! as HTMLInputElement;
    return element.value;
  }
}
