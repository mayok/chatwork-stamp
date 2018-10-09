import { Container } from "inversify";
import { Repository, showStampListUseCase, registStampUseCase, postStampUseCase, TYPES } from "./interfaces";
import showStampListInteractor from "./interactor/showStampListInteractor";
import registStampInteractor from "./interactor/registStampInteractor";
import postStampInteractor from "./interactor/postStampInteractor";
import localStorageRepository from "./repository/localStorageRepository";

const diContainer = new Container();
diContainer.bind<Repository>(TYPES.repository).to(localStorageRepository);
diContainer.bind<showStampListUseCase>(TYPES.showStamp).to(showStampListInteractor);
diContainer.bind<registStampUseCase>(TYPES.registStamp).to(registStampInteractor);
diContainer.bind<postStampUseCase>(TYPES.postStamp).to(postStampInteractor);

export { diContainer };
