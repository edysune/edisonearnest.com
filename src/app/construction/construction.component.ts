import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-construction-component',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.scss']
})
export class ConstructionComponent implements OnInit {

  constructor() { }

  @Input() componentName = "";

  ngOnInit(): void {
  }

  public getMsg() {
    return !this.componentName || this.componentName == "" ? "This site" : this.componentName;
  }

}
