import { postStampUseCase } from "../interfaces";
import { injectable } from "inversify";

@injectable()
class postStampInteractor implements postStampUseCase {
  constructor() {}

  post(event: Event) {
    const textarea = document.getElementById("_chatText");
    const stamp = (<HTMLElement>event.currentTarget).dataset.stamp;
    textarea.focus();
    document.execCommand("insertText", false, stamp);
  }
}

export default postStampInteractor;
