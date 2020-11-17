import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  // if you intend to call a service method directly from template, make it public in the constructor
  constructor(public contactsService: ContactsService) { }
  // constructor(private contactsService: ContactsService) { }

  contactList = [];

  ngOnInit(): void {
    this.contactList = this.contactsService.getContact();
  }

}
