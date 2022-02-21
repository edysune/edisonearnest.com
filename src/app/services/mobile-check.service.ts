import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileCheckService {

  private mobileSize = 1024;

  constructor() { }

  public isMobileScreenSize() {
      document.body.offsetWidth < this.mobileSize;
  }
}
