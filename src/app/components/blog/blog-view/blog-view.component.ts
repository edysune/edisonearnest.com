import { Component, OnInit } from '@angular/core';
import { blog } from 'src/app/globals/globalConstants';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {

  constructor() { }

  public blogs: blog[] = [
    {
      image: "../../assets/edisonearnest_assets/nav-assets/blog_assets/stay_safe.jpg",
      title: "Life with Covid",
      description: "Still Alive - Just an update with Covid from 2019-2022.",
      date: new Date(2022, 0, 9),
      tags: ["covid", "life"],
      component: "covid 2022 - 1"
    }
  ]

  ngOnInit(): void {
  }


}