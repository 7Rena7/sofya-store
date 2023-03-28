import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clothe, ClothesService } from 'src/app/services/clothes.service';
import { Contact, ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-clothe',
  templateUrl: './clothe.component.html',
  styleUrls: ['./clothe.component.css']
})
export class ClotheComponent {
  // TODO: Error screen if clothe not found, redirect to Collection section
  
  clothe: Clothe | null;
  contact: Contact;

  constructor(route: ActivatedRoute, clothes: ClothesService, contactService: ContactService) {
    window.scrollTo(0, 50);
    this.contact = contactService.getRandomContact();
    route.params.subscribe(({id}) => {
      this.clothe = clothes.getClothe(Number(id));
    })
  }

  askForProductWhatsApp(productName: string | undefined) {
    window.open(`https://wa.me/${this.contact.phone}?text=Hola%20${this.contact.name}%2C%20estoy%20interesad%40%20en%20la%20prenda%20${productName}%2C%20podr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n%3F`, '_blank');
  }
}
