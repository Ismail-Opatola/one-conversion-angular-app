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

  callServiceFromTemplateDirectly(): void {
    console.log('called contact service from template directly');
  }
}
