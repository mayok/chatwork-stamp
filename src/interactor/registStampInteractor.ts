import { registStampUseCase, Repository, Stamp, TYPES } from "../interfaces";
import { injectable, inject } from "inversify";

@injectable()
class registStampInteractor implements registStampUseCase {
  private repository: Repository;
  private data: Stamp;

  constructor(@inject(TYPES.repository) repository: Repository) {
    this.repository = repository;
    this.handleClick = this.handleClick.bind(this);
    // ???
    this.regist = this.regist.bind(this);
  }

  // Todo: 複数一括登録
  handleClick(e: Event) {
    e.stopImmediatePropagation();
    e.preventDefault();
    // eventlistener を削除
    Array.from(document.querySelectorAll("img"), event => {
      event.removeEventListener("click", this.handleClick, false);
    });

    // Todo: setter とかにするべき ?
    this.data = {
      src: (<HTMLImageElement>e.target).src,
      attr: (<HTMLElement>e.target).dataset.cwtag
    };

    this.repository.save(this.data);
  }

  regist() {
    // Todo: update logic
    // image 要素全てに event listener をつける
    Array.from(document.querySelectorAll("img"), (e: HTMLImageElement) => {
      e.addEventListener("click", this.handleClick, false);
    });

    // Todo: img 以外の要素がクリックされたときの処理
  }
}

export default registStampInteractor;
