import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-construction-component',
  templateUrl: './construction-component.component.html',
  styleUrls: ['./construction-component.component.scss']
})
export class ConstructionComponentComponent implements OnInit {

  constructor() { }

  @Input() componentName = "";

  ngOnInit(): void {
  }

  public getMsg() {
    return !this.componentName || this.componentName == "" ? "This site" : this.componentName;
  }

}
