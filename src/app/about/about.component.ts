import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-component',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public shortText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  public longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Sed enim ut sem viverra. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Maecenas accumsan lacus vel facilisis volutpat est. Turpis egestas sed tempus urna et pharetra pharetra massa. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. A lacus vestibulum sed arcu. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Magna etiam tempor orci eu lobortis elementum. Pellentesque elit eget gravida cum sociis. Tellus molestie nunc non blandit massa enim nec dui nunc. Tristique senectus et netus et malesuada fames ac turpis. Condimentum mattis pellentesque id nibh tortor id aliquet.\nVel pharetra vel turpis nunc eget lorem dolor. Id diam vel quam elementum pulvinar etiam non quam lacus. Maecenas volutpat blandit aliquam etiam erat velit. Laoreet suspendisse interdum consectetur libero id faucibus. Ornare quam viverra orci sagittis eu. Ipsum a arcu cursus vitae congue mauris. Diam in arcu cursus euismod quis viverra nibh cras. Natoque penatibus et magnis dis. Consequat ac felis donec et odio pellentesque diam volutpat. Amet porttitor eget dolor morbi non.";

  ngOnInit(): void {
  }

}
