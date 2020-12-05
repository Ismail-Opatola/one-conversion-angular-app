import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Data {
  id: number;
  firstname?: string;
  lastname?: string;
}

// @injectable indicate this service class can be injected into any component
@Injectable({
  providedIn: 'root'
  // when a service is provided in root ie. it can be used across the app. it can be injected into any component
})
export class ContactsService {

  constructor(private httpClient: HttpClient) { }

  getContacts(): Observable<any> {
    // set headers
    const httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: 'fake-id-token-35hegeheee-wjwihdhdidjd'
    });

    // get request
    return this.httpClient.get('http://localhost:3000/contacts', { headers: httpHeaders });
  }

  createContact(data: object): Observable<any> {
    let httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: 'fake-id-token-35hegeheee-wjwihdhdidjd',
      timeOutSeconds: '3000'
    });

    // set custom headers
    httpHeaders = httpHeaders.set('arc-tutorials-id', '118');

    const time: string = httpHeaders.get('timeOutSeconds');

    if (time === '3000') {
      // at the api - we can check for empty auth token then redirect user
      httpHeaders = httpHeaders.set('Authorization', '');
    }

    // post request
    return this.httpClient.post('http://localhost:3000/contacts', data, { headers: httpHeaders });
  }

  updateContact(data: Data): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

    const endpoint = `http://localhost:3000/contacts/${data.id}`;

    // put request
    return this.httpClient.put(endpoint, data, { headers: httpHeaders });
  }

  deleteContact(id: number): Observable<any> {
    const endpoint = `http://localhost:3000/contacts/${id}`;
    return this.httpClient.delete(endpoint);
  }

  // get contact by id
  getContact(): Observable<any>{
    // using http parameters
    // http://localhost:3000/contacts?query=tovi
    // const httpParams = new HttpParams({
    //   fromObject: {
    //     firstname: 'tovi'
    //   }
    // });
    const httpParams = new HttpParams({
      fromObject: {
        id: ['2', '3'],
      }
    });
    // const httpParams = new HttpParams({
    //   filter with params
    //   fromObject: {
    //     id: ['2', '3'],
    //     firstname: 'tovi'
    //   }
    // });

    const endpoint = `http://localhost:3000/contacts`;
    return this.httpClient.get(endpoint, {params: httpParams});
  }

  callServiceFromTemplateDirectly(): void {
    console.log('called contact service from template directly');
  }
}
