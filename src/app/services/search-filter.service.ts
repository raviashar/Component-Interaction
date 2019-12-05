import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObserverSubscriberService {
  
  constructor() { }

  private serachDataSubject = new Subject<any>();
  private radioDataSubject = new Subject<any>();
  private navigationPathSubject = new Subject<any>();

  sendSearchData(searchData: string) {
    this.serachDataSubject.next({ text: searchData });
  }
  
  getSearchData(): Observable<any> {
    return this.serachDataSubject.asObservable();
  }
  
  sendRadioData(radioData: string) {
    this.radioDataSubject.next({ text: radioData });
  }

  getRadioData(): Observable<any> {
    return this.radioDataSubject.asObservable();
  }

  sendNavigationPath(navigationPath: string) {
    return this.navigationPathSubject.next({ path: navigationPath });
  }

  getNavigationPath(): Observable<any> {
    return this.navigationPathSubject.asObservable();
  }
}
