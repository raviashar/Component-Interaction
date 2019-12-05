import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StudentListComponent } from './student-list.component';
import { SearchFilterModule } from '../search-filter/search-filter.module';

@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    SearchFilterModule
  ],
  providers: [],
  exports: [StudentListComponent],
  bootstrap: [StudentListComponent]
})
export class StudentListModule { }
