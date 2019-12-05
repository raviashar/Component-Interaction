import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { EmployeeListModule } from './employee-list/employee-list.module';
import { StudentListModule } from './student-list/student-list.module';
import { SearchFilterModule } from './search-filter/search-filter.module';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    EmployeeListModule,
    StudentListModule,
    SearchFilterModule,
    AppRouting,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
