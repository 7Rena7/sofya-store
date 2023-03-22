import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  askForProductWhatsApp() {
    window.open(`https://wa.me/+59891865424?text=Hola%2C%20me%20podr%C3%ADas%20dar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20colecci%C3%B3n%20disponible%3F`, '_blank');
  }
}
