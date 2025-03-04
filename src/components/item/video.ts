import { BaseComponent } from '../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
          <div class="video__player">
            <iframe
              class="video__iframe"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QMRfwapH_WI?si=qp5dht3QOVYFWxay"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <h2 class="video__title"></h2>
        </section>`);

    const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
    titleElement.textContent = title;

    const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
    iframe.src = this.convertToEmbeddedURL(url);
  }
  private convertToEmbeddedURL(url: string): string {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-_]{11}))|(?:youtu.be\/([a-zA-Z0-9-_]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;

    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  }
}
