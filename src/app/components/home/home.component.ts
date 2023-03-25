import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  phoneNumber: string = '';
  name: string = '';

  constructor(private contactService: ContactService) {
    this.phoneNumber = contactService.getRandomContact().phone;
    this.name = contactService.getRandomContact().name;
  }


  askForProductWhatsApp() {
    window.open(`https://wa.me/${this.phoneNumber}?text=Hola%20${this.name}%2C%20me%20podr%C3%ADas%20dar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20colecci%C3%B3n%20disponible%3F`, '_blank');
  }
}
