import { Component, Input, OnInit } from '@angular/core';
import { blog } from 'src/app/globals/globalConstants';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  constructor() { }

  @Input()
  model!: blog;

  public isActivated = false;

  ngOnInit(): void {
    console.log(this.model)
  }

  public blogClicked(){
    console.log("Clicked")
    this.isActivated = !this.isActivated;
  }
}