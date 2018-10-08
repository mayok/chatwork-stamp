export interface Stamps {
  stamps: Stamp[];
}

export interface Stamp {
  src: string;
  attr: string;
}

export interface Repository {
  save: (image: Stamp) => void;

  // array of DOM?
  getStamps: () => Stamps;
}

export interface showStampListUseCase {
  show: () => void;
}

export interface registStampUseCase {
  regist: () => void;
}

export interface postStampUseCase {
  post: (event: Event) => void;
}

const TYPES = {
  repository: Symbol.for("repository"),
  showStamp: Symbol.for("showStamp"),
  registStamp: Symbol.for("registStamp"),
  postStamp: Symbol.for("postStamp")
};

export { TYPES };
