import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[] = [];
  contact:Contact = null;

  addContact(contact: Contact):void {
    this.contacts.push(contact);
  }

  setCurrent(contact: Contact) {
    this.contact = contact;
  }
}
type Contact = {
  name:string,
  email:string,
  phone: string,
  desc: string
}
