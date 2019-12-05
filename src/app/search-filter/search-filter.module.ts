import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SearchFilterComponent } from './search-filter.component';

@NgModule({
  declarations: [
    SearchFilterComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  exports: [SearchFilterComponent],
  bootstrap: [SearchFilterComponent]
})
export class SearchFilterModule { }
