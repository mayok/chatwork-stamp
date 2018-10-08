// Am I controller ?
import "reflect-metadata";
import { TYPES, showStampListUseCase } from "./interfaces";
import { diContainer } from "./inversify.config";

class Renderer {
  private usecase;

  constructor() {
    this.usecase = diContainer.get<showStampListUseCase>(TYPES.showStamp);
  }

  render() {
    const html = `<li class="_showDescription _ext_stamp_icon" role="button" aria-label="stamp"><span class="_ext_stamp_icon_tag">stamp</span></li>`;
    const el = document.createElement("template");
    el.insertAdjacentHTML("beforeend", html);
    el.firstElementChild.addEventListener("click", this.usecase.show, false);

    document.getElementById("_chatSendTool").appendChild(el.firstElementChild);
  }
}

const renderer = new Renderer();
renderer.render();
