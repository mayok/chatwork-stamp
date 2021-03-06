import { injectable, inject } from "inversify";
import { Repository, showStampListUseCase, registStampUseCase, postStampUseCase, TYPES, Stamps } from "../interfaces";

@injectable()
class showStampListInteractor implements showStampListUseCase {
  private repository: Repository;
  private register: registStampUseCase;
  private poster: postStampUseCase;

  constructor(
    @inject(TYPES.repository) repository: Repository,
    @inject(TYPES.registStamp) register: registStampUseCase,
    @inject(TYPES.postStamp) poster: postStampUseCase
  ) {
    this.repository = repository;
    this.register = register;
    this.poster = poster;

    // こうするの ???
    // React とかののソースコード見てみたい
    this.show = this.show.bind(this);
  }

  // Todo: でかい
  // Todo: stamp 追加と DOM を同期させたい !
  show(): void {
    // もし ._ext_stamp_list が存在しなかったら 作る
    if (!document.querySelector("._ext_stamp_list")) {
      const html = `<div class="_ext_stamp_list"><div class="_ext_stamp_button">登録</div></div>`;
      const el = document.createElement("template");
      el.insertAdjacentHTML("beforeend", html);

      document.getElementById("_chatSendToolbar").appendChild(el.firstElementChild);

      // Todo: できれば showStampListInteractor の中に入れたくない
      // スタンプの登録
      document.querySelector("._ext_stamp_button").addEventListener("click", this.register.regist, false);

      const container = document.createElement("ul");
      const fragment = document.createDocumentFragment();
      const json: Stamps = this.repository.getStamps();
      for (const stamp of json.stamps) {
        const img = document.createElement("img");
        img.setAttribute("src", stamp.src);
        img.dataset.stamp = stamp.attr;

        // eventlistener 登録
        // Todo: 2回目以降も eventlistener 追加する ?
        // DOM を消す ...
        img.addEventListener("click", this.poster.post, false);
        fragment.appendChild(img);
      }
      container.appendChild(fragment);

      // Todo: es6 way
      // ChildNode.before(newNode)
      const refNode = document.querySelector("._ext_stamp_button");
      refNode.parentNode.insertBefore(container, refNode);
    }
    document.querySelector("._ext_stamp_list").classList.toggle("active");

    // Todo: ._ext_stamp_list が active でなかったら 消す
  }
}

export default showStampListInteractor;
