
import { observable, action, makeObservable } from 'mobx';

import NetworkState from './NetworkState';


class ApplicationState {
  @observable network = new NetworkState();
  @observable isAuth: boolean = navigator.onLine;
  @observable isLoading: boolean = true;

  @action private changeAuthState(state: boolean) {
    this.isAuth = state;
  }

  @action private changeLoadingState(state: boolean) {
    this.isLoading = state;
  }

  constructor() {
    makeObservable(this);
  }
}

export default ApplicationState;
