import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  desc: string = '';

  @Output('add-contact') contactEmitter: EventEmitter<Contact>
    = new EventEmitter<Contact>();

  add(){
    this.contactEmitter.emit({
      name:this.name,
      email:this.email,
      phone:this.phone,
      desc:this.desc
    });
    this.name = '';
    this.email = '';
    this.phone = '';
    this.desc = '';
  }
}

type Contact = {
  name:string,
  email:string,
  phone: string,
  desc: string
}
