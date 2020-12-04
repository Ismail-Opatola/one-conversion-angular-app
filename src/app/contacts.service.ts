import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// @injectable indicate this service class can be injected into any component
@Injectable({
  providedIn: 'root'
  // when a service is provided in root ie. it can be used across the app. it can be injected into any component
})
export class ContactsService {

  constructor(private httpClient: HttpClient) { }

  getContacts(): Observable<any> {
    // set headers
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

    // get request
    return this.httpClient.get('http://localhost:3000/contacts');
  }

  createContact(data: object): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

    // post request
    return this.httpClient.post('http://localhost:3000/contacts', data, { headers: httpHeaders });
  }

  callServiceFromTemplateDirectly(): void {
    console.log('called contact service from template directly');
  }
}
