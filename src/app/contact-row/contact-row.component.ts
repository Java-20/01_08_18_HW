import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-row',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.css']
})
export class ContactRowComponent {
  @Input('current')current:Contact;
}
type Contact = {
  name:string,
  email:string,
  phone: string,
  desc: string
}
