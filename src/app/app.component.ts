import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oneConversion';

  subTitle = `Learning Interpolation`;
  epNum = 18;
  user = {uid: 97608, name: 'kamal'};

  colorVal = 'lightpink';
  colorLightPink = 'bg-color-pink--light';
  colorLightBlue = 'bg-color-blue--light';

  hrefVal = 'http://google.com';

  showAlert(id) {
    alert(`Hello world! Event binding ${id ? id : ''}`);
  }
}
