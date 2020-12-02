import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

// @injectable indicate this service class can be injected into any component
@Injectable({
  providedIn: 'root'
  // when a service is provided in root ie. it can be used across the app. it can be injected into any component
})
export class ContactsService {

  constructor(private httpClient: HttpClient) { }

  getContacts(): any {
    return this.httpClient.get('http://localhost:3000/contacts');
  }

  callServiceFromTemplateDirectly(): void {
    console.log('called contact service from template directly');
  }
}
