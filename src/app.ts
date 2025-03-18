import { Component } from './components/component.js';
import { InputDialog, MediaData, TextData } from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/item/image.js';
import { NoteComponent } from './components/item/note.js';
import { TodoComponent } from './components/item/todo.js';
import { VideoComponent } from './components/item/video.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  new (placeholder?: string): T;
};
const MOCK_IMAGE_URL = 'https://picsum.photos/560/315';
const MOCK_VIDEO_URL = 'https://youtu.be/MWkIxYtB8Ag?si=cn4Afxq39WE9c8Fw';
class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    this.bindElementToDialog<MediaSectionInput>('#new-image', MediaSectionInput, (input: MediaSectionInput) => new ImageComponent(input.title, input.url), MOCK_IMAGE_URL);
    this.bindElementToDialog<MediaSectionInput>('#new-video', MediaSectionInput, (input: MediaSectionInput) => new VideoComponent(input.title, input.url), MOCK_VIDEO_URL);
    this.bindElementToDialog<TextSectionInput>('#new-note', TextSectionInput, (input: TextSectionInput) => new NoteComponent(input.title, input.body));
    this.bindElementToDialog<TextSectionInput>('#new-todo', TextSectionInput, (input: TextSectionInput) => new TodoComponent(input.title, input.body));

    this.page.addChild(new ImageComponent('Image Title', MOCK_IMAGE_URL));
    this.page.addChild(new VideoComponent('Video Title', MOCK_VIDEO_URL));
    this.page.addChild(new NoteComponent('Note Title', 'Note body'));
    this.page.addChild(new TodoComponent('Video Title', 'Video body'));
    this.page.addChild(new ImageComponent('Image Title', MOCK_IMAGE_URL));
    this.page.addChild(new VideoComponent('Video Title', MOCK_VIDEO_URL));
    this.page.addChild(new NoteComponent('Note Title', 'Note body'));
    this.page.addChild(new TodoComponent('Video Title', 'Video body'));
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    //
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component,
    placeholder?: string
  ) {
    const elementBtn = document.querySelector(selector)! as HTMLButtonElement;
    elementBtn.onclick = () => {
      const dialog = new InputDialog();
      const inputSection = new InputComponent(placeholder);
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
