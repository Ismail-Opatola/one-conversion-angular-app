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

  contactList: any;
  isSent = false;

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe((data: any[]) => {
      this.contactList = data;
    });
  }

  addNewContact(form): void {
    // mock form data
    // const newData: object = {
    //   id: 8,
    //   firstname: 'Jerry',
    //   lastname: 'Springer'
    // };

    // dynamic data from form
    console.log(form.value.id);
    console.log(form.value.firstname);
    console.log(form.value.lastname);
    const newData: object = {
      id: form.value.id,
      firstname: form.value.firstname,
      lastname: form.value.lastname
    };

    this.contactsService.createContact(newData).subscribe(data => {
      console.log(data);
      this.isSent = true;
    });
  }
}
