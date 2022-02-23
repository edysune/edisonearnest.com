import { Component, OnInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-page-not-found-component',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  public currentToastMessage = "";

  ngOnInit(): void {
  }

  public toastPlacements = [
    "top-0 start-0",
    "top-0 start-50 translate-middle-x",
    "top-0 end-0",
    "top-50 start-0 translate-middle-y",
    "top-50 start-50 translate-middle",
    "top-50 end-0 translate-middle-y",
    "bottom-0 start-0",
    "bottom-0 start-50 translate-middle-x",
    "bottom-0 end-0"
  ]

  public toastPhrases = [
    "This really didn't do anything did it... ",
    "Build a man a fire, he's warm for a day. SET a man on fire, he's warm the rest of his life.",
    "When I wrote this code, only God and I understood what I did. Now only God knows.",
    "A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don’t touch!",
    "Copy-and-Paste was programmed by programmers for programmers actually.",
    "Initializing Hyperdrive... Wait no, I accidentally clicked the self-destruct button.",
    "Debugging is twice as hard as writing the code in the first place."
  ]

  public genNextToastMessage() {
    this.currentToastMessage = this.toastPhrases[Math.floor(Math.random() * this.toastPhrases.length)];
  }

  public showToast() {
    
    this.genNextToastMessage();

    var toastElement = document.getElementById('toastBody');

    var toast = new bootstrap.Toast(toastElement);
    
    toast.show();

  }

}
