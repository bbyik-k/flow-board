import { Component } from './components/component.js';
import { ImageComponent } from './components/item/image.js';
import { NoteComponent } from './components/item/note.js';
import { TodoComponent } from './components/item/todo.js';
import { VideoComponent } from './components/item/video.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
    this.page.addChild(image);
    // image.attachTo(appRoot, 'beforeend');

    const video = new VideoComponent('Video Title', 'https://www.youtube.com/embed/QMRfwapH_WI?si=qp5dht3QOVYFWxay');
    this.page.addChild(video);
    // video.attachTo(appRoot, 'beforeend');

    const note = new NoteComponent('Note Title', 'Note body text hello hello');
    this.page.addChild(note);
    // note.attachTo(appRoot, 'beforeend');

    const todo = new TodoComponent('Todo Title', 'Todays Todo1');
    this.page.addChild(todo);
    // todo.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('.document')! as HTMLElement);
