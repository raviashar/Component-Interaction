import { Component, OnDestroy } from '@angular/core';
import { ObserverSubscriberService } from '../services/search-filter.service';
import { MatRadioChange } from '@angular/material';
import { Subscription } from 'rxjs';
import { StringConstant } from "../shared/stringConstant";

@Component({
  selector: 'search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnDestroy {

  private _searchData: string;
  navigationPathSubscribe: Subscription;
  isRadioVisible: boolean = true;

  constructor(private observerSubscriberService: ObserverSubscriberService, private stringConstant: StringConstant) {

    this.navigationPathSubscribe = this.observerSubscriberService.getNavigationPath().subscribe(x => {
      if (x.path === this.stringConstant.studentNavigationPath) {
        this.isRadioVisible = false;
      }
      else {
        this.isRadioVisible = true;
      }
    });
  }

  ngOnDestroy() {
    this.navigationPathSubscribe.unsubscribe();
  }

  set searchData(value: string) {
    this._searchData = value;
    this.observerSubscriberService.sendSearchData(this._searchData);
  }

  radioChange(event: MatRadioChange) {
    this.observerSubscriberService.sendRadioData(event.value);
  }  

}
