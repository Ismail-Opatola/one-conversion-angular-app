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
  user = {
    uid: 97608,
    firstname: 'kamal',
    lastname: 'jingo',
    DOB: '07/09/1992',
    salary: 320000.56
  };

  users = [
    {
      name: 'John Doe',
      city: 'Lagos',
      cityCode: 'LG'
    },
    {
      name: 'John Dil',
      city: 'london',
      cityCode: 'LDN'
    },
    {
      name: 'Judith Doe',
      city: 'Las vagas',
      cityCode: 'LV'
    },
    {
      name: 'Jax Jones',
      city: 'Luxenburg',
      cityCode: 'LXG'
    }
  ];

  colorVal = 'lightpink';
  colorLightPink = 'bg-color-pink--light';
  colorLightBlue = 'bg-color-blue--light';

  hrefVal = 'http://google.com';

  firstname = '';

  logger = (data: any) => console.log(data);

  showAlert = (id: number) => this.logger(`Hello world! Event binding ${id ? id : ''}`);

  logData = () => this.logger(this.firstname);
}
