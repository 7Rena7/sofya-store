import { Component } from '@angular/core';
import { Contact, ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent {
  
  contact: Contact;

  constructor(private contactService: ContactService) {
    this.contact = this.contactService.getRandomContact();
  }
}
