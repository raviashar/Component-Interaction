import { Component, OnInit } from '@angular/core';
import { NavigationList } from './app.model';
import { StringConstant } from "./shared/stringConstant";
import { Router } from '@angular/router';
import { ObserverSubscriberService } from './services/search-filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'component-interaction';
  navigation: Array<NavigationList>;

  constructor(public stringConstant: StringConstant, private router: Router, private observerSubscriberService: ObserverSubscriberService) {
    this.navigation = new Array<NavigationList>();
  }

  ngOnInit() {
    this.generateNavigation();
  }

  generateNavigation() {
    this.navigation = [
      { id: 1, name: this.stringConstant.employeeNavigationName, pathName: this.stringConstant.employeeNavigationPath },
      { id: 2, name: this.stringConstant.studentNavigationName, pathName: this.stringConstant.studentNavigationPath }
    ];
  }

  ChangeRoute(routePath) {
    this.router.navigateByUrl(routePath);
    this.observerSubscriberService.sendNavigationPath(routePath);
  }
}
