
import { observable, action, makeObservable } from 'mobx';


class NetworkState {
  @observable isOnline: boolean = navigator.onLine;

  @action private changeState(state: boolean) {
    this.isOnline = state;
  }

  private handleOnline() {
    this.changeState(true);
  }

  private handleOffline() {
    this.changeState(false);
  }

  constructor() {
    makeObservable(this);

    window.addEventListener('online', this.handleOnline.bind(this));
    window.addEventListener('offline', this.handleOffline.bind(this));
  }

  public destructor() {

    window.removeEventListener('online', this.handleOnline.bind(this));
    window.removeEventListener('offline', this.handleOffline.bind(this));
  }
}

export default NetworkState;
