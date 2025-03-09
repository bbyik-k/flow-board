import { Component } from './components/component.js';
import { InputDialog } from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/item/image.js';
import { NoteComponent } from './components/item/note.js';
import { TodoComponent } from './components/item/todo.js';
import { VideoComponent } from './components/item/video.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';

type InputComponentConstructor<T = MediaSectionInput | TextSectionInput> = {
  new (): T;
};
class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    this.bindElementToDialog<MediaSectionInput>('#new-image', MediaSectionInput, (input: MediaSectionInput) => new ImageComponent(input.title, input.url));
    this.bindElementToDialog<MediaSectionInput>('#new-video', MediaSectionInput, (input: MediaSectionInput) => new VideoComponent(input.title, input.url));
    this.bindElementToDialog<TextSectionInput>('#new-note', TextSectionInput, (input: TextSectionInput) => new NoteComponent(input.title, input.body));
    this.bindElementToDialog<TextSectionInput>('#new-todo', TextSectionInput, (input: TextSectionInput) => new TodoComponent(input.title, input.body));
  }

  private bindElementToDialog<T extends MediaSectionInput | TextSectionInput>(
    //
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    const elementBtn = document.querySelector(selector)! as HTMLButtonElement;
    elementBtn.onclick = () => {
      const dialog = new InputDialog();
      const inputSection = new InputComponent();
      dialog.addChild(inputSection);
      dialog.attachTo(this.dialogRoot);

      dialog.setCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setSubmitListener(() => {
        const section = makeSection(inputSection);
        this.page.addChild(section);
        dialog.removeFrom(this.dialogRoot);
      });
    };
  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);
