import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentList } from './student-list.model';
import { Subscription } from 'rxjs';
import { ObserverSubscriberService } from '../services/search-filter.service';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {

  studentList: Array<StudentList>;
  searchData: string;
  radioData: string;
  studentListSubscribe: Subscription;
  studentListRadioSubscribe: Subscription;

  constructor(private observerSubscriberService: ObserverSubscriberService) {
    this.studentList = new Array<StudentList>();

    this.studentListSubscribe = this.observerSubscriberService.getSearchData().subscribe(x => {
      this.searchData = x.text;
    });
    this.studentListRadioSubscribe = this.observerSubscriberService.getRadioData().subscribe(x => {
      this.radioData = x.text;
    });
  }

  ngOnInit() {
    this.generateStudent();
  }

  ngOnDestroy() {
    this.studentListSubscribe.unsubscribe();
    this.studentListRadioSubscribe.unsubscribe();
  }

  generateStudent() {
    this.studentList = [
      { id: 1, name: 'John Doe', stream: 'Computer Science', college: 'XYZ Institute', location: 'Vadodara' },
      { id: 2, name: 'Tom Richer', stream: 'It Engineering', college: 'ABC Institute', location: 'Ahmedabad' },
      { id: 3, name: 'Tim Southy', stream: 'Mechanical Engineering', college: 'MBI Institute', location: 'Pune' },
      { id: 4, name: 'Mary Richard', stream: 'Mechanical Engineering', college: 'GUJ Institute', location: 'Vadodara' },
      { id: 5, name: 'Jenny Joseph', stream: 'Electric Communication', college: 'BRC Institute', location: 'Banglore' },
      { id: 6, name: 'Jackson Vandam', stream: 'Auto Mobile', college: 'KJI Institute', location: 'Mumbai' },
      { id: 7, name: 'Micky John', stream: 'Electrical Engineering', college: 'LKP Institute', location: 'Delhi' }
    ];
  }
}
