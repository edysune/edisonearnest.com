import { Component, Input, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { blog } from 'src/app/globals/globalConstants';
import { MobileCheckService } from 'src/app/services/mobile-check.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  isMobile: any;

  constructor(private  mobileService: MobileCheckService) { }

  @Input() model!: blog;

  public isActivated = false;

  ngOnInit(): void {  

    //may need to alter classes due to whether or not it is mobile
    this.isMobile = this.mobileService.isMobileScreenSize();
    window.onresize = () => {
      this.isMobile = this.mobileService.isMobileScreenSize();
    };
    
  }

  public blogClicked(){
    console.log("Clicked")
    this.isActivated = !this.isActivated;
  }
}