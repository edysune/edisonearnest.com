import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-component',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public shortText = 
  "My name is Edison. I'm a Programmer who currently does Full Stack Development. On the side I have a couple of projects I switch off when I'm not day dreaming about owning a cabin in the woods and looking at cat memes.\n\n" + 
  "";

  public longText = 
  "I'm originally from Washington, and enjoy the rain and trees. I've always been into computers since I was young.\n\n" + 
  "In 2018, I graduated from Utah Valley University with a degree in Computer Science. For my capstone I wrote a simple Virtual Machine in C++, and a Compiler for an object oriented language in DLang.\n\n" +
  "During my time at UVU, I was a CS Academic tutor for almost 2 years. I eventually started working at Micro Focus, where I mostly worked as a QA Engineer for Voltage Encryption Software.\n\n" +
  "I am currently working at Motorola Solutions, where I fix and develop features for our cloud app in Angular and .Net. I've also had a lot of fun learning about Azure Devops and other tools like pipelines.\n\n" +
  "I really enjoy just jumping in and learning about different things. In the next couple of years I plan on spending more time writing scripts and programs for some of my hobbies, and maybe dig into things like AI. But for now I'm just hoping to survive Covid like everyone else."

  ngOnInit(): void {
  }

}
