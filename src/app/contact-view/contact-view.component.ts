import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent {
  // @Input('currentView') current:Contact = null;
  current: Contact = null;
  setCurrent(contact:Contact){
    this.current = contact;
  }
}
type Contact = {
  name:string,
  email:string,
  phone: string,
  desc: string
}
