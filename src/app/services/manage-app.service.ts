import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManageAppService {
  journyEmitted = new Subject<string>();

  constructor() {}

  // set localstorage item value and emit subject value
  setlocalStorage(value: string): void {
    if (value) {
      localStorage.setItem('startedBefore', value);
      this.journyEmitted.next(value);
    }
  }

  // method to get value of the localstorage item
  getLocalStorage(): string | null {
    const localStorageValue = localStorage.getItem('startedBefore');
    return localStorageValue ? localStorageValue : null;
  }

  // method to send subject value of obsevable
  recieveJournyValue(): Observable<string> {
    return this.journyEmitted.asObservable();
  }
}
