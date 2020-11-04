import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oneConversion';

  subTitle= `Learning Interpolation`;
  epNum = 18;
  user = {uid: 97608, name: 'kamal'};
}
