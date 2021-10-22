import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../globals/globalConstants';

@Component({
  selector: 'app-nav-bar-component',
  templateUrl: './nav-bar-component.component.html',
  styleUrls: ['./nav-bar-component.component.scss']
})
export class NavBarComponentComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  public getNavBarSite() {
    return GlobalConstants.SITE_NAME;
  }

}
