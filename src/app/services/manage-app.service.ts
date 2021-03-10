import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManageAppService {
  constructor() {}

  setlocalStorage(value: string) {
    if (value) {
      localStorage.setItem('startedBefore', value);
    }
  }

  getLocalStorage(): string | null {
    const localStorageValue = localStorage.getItem('startedBefore');
    return localStorageValue ? localStorageValue : null;
  }
}
