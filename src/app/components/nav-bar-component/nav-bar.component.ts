import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/globals/globalConstants';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  public getNavBarSite() {
    return GlobalConstants.SITE_NAME;
  }

}
