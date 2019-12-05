import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeList } from './employee-list.model';
import { Subscription } from 'rxjs';
import { ObserverSubscriberService } from '../services/search-filter.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy {

  employeeList: Array<EmployeeList>;
  text: number;
  radioData: string;
  searchData: string;
  employeeListSubscription: Subscription;

  constructor(private observerSubscriberService: ObserverSubscriberService) {
    this.employeeList = new Array<EmployeeList>();
    this.employeeListSubscription = this.observerSubscriberService.getSearchData().subscribe(x => {
      this.searchData = x.text;
    });
    this.employeeListSubscription = this.observerSubscriberService.getRadioData().subscribe(x => {
      this.radioData = x.text;
    });
  }

  ngOnInit() {
    this.generateEmployee();
  }

  ngOnDestroy() {
    this.employeeListSubscription.unsubscribe();
  }

  generateEmployee() {
    this.employeeList = [
      { id: 1, name: 'John Doe', designation: 'Web Designer', organization: 'Design Infotech', salary: 250000, location: 'Vadodara' },
      { id: 2, name: 'Tom Richer', designation: 'Web Developer', organization: 'Developing Infotech', salary: 350000, location: 'Ahmedabad' },
      { id: 3, name: 'Tim Southy', designation: 'Manager', organization: 'Management Organization', salary: 450000, location: 'Pune' },
      { id: 4, name: 'Mary Richard', designation: 'Web Designer', organization: 'Design Softech', salary: 350000, location: 'Vadodara' },
      { id: 5, name: 'Jenny Joseph', designation: 'Ux Designer', organization: 'Jackson Infotech', salary: 450000, location: 'Banglore' },
      { id: 6, name: 'Jackson Vandam', designation: 'Web Developer', organization: 'XYZ Soultion', salary: 275000, location: 'Mumbai' },
      { id: 7, name: 'Micky John', designation: 'Assist. Manager', organization: 'Cezor Organization', salary: 550000, location: 'Delhi' }
    ];
  }

}
