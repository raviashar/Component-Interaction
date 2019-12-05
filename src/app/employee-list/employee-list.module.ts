import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EmployeeListComponent } from './employee-list.component';
import { SearchFilterModule } from '../search-filter/search-filter.module';
import { ObserverSubscriberService } from '../services/search-filter.service';

@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    SearchFilterModule
  ],
  providers: [ObserverSubscriberService],
  exports: [EmployeeListComponent],
  bootstrap: [EmployeeListComponent]
})
export class EmployeeListModule { }
