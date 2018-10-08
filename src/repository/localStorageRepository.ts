import { injectable } from "inversify";
import { Repository, Stamp, Stamps } from "../interfaces";

@injectable()
class localStorageRepository implements Repository {
  constructor() {}

  public save = (image: Stamp) => {
    const stamps = window.localStorage.getItem("stamps");
    if (!!stamps) {
      const json = JSON.parse(stamps);
      window.localStorage.setItem("stamps", JSON.stringify(json.stamps.push(image)));
    } else {
      const stamps = new Array();
      stamps.push(image);
      window.localStorage.setItem("stamps", JSON.stringify({ stamps }));
    }
  };

  public getStamps = (): Stamps => {
    const stamps = window.localStorage.getItem("stamps");
    if (!!stamps) {
      return JSON.parse(stamps);
    }
    return { stamps: [] };
  };
}

export default localStorageRepository;
