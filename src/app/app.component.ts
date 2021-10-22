import { Component } from '@angular/core';
import { GlobalConstants } from './globals/globalConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = GlobalConstants.SITE_NAME;
}
