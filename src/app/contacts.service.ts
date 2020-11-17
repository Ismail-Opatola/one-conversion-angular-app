import { Injectable } from '@angular/core';

// @injectable indicate this service class can be injected into any component
@Injectable({
  providedIn: 'root'
  // when a service is provided in root ie. it can be used across the app. it can be injected into any component
})
export class ContactsService {

  constructor() { }

  getContact(): any {
    // HTTP calls here
    const contactList = [
      {contactId: 1, contactName: 'Njay'},
      {contactId: 2, contactName: 'Tjay'},
      {contactId: 3, contactName: 'Vjay'},
      {contactId: 4, contactName: 'Henry'},
      {contactId: 5, contactName: 'Juliet'}
    ];
    return contactList;
  }

  callServiceFromTemplateDirectly(): void {
    console.log('called contact service from template directly');
  }
}
