import { BaseComponent, Component } from '../component.js';

export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;

interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
}

type SectionContainerConstructor = {
  new (): SectionContainer;
};
export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super('<ul></ul>');
    this.element.classList.add('page');
  }

  addChild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}

export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {
  private closeListener?: OnCloseListener;
  constructor() {
    super(`<li class="page-item">
            <section class="page-item__body">
              <div class="page-item__controls">
                <button class="close">&times;</button>
              </div>
            </section>
          </li>`);

    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }

  addChild(child: Component) {
    const container = this.element.querySelector('.page-item__body')! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}
