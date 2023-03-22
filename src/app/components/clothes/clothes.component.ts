import { Component } from '@angular/core';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent {
  askForProductWhatsApp() {
    window.open(`https://wa.me/+59891865424?text=Hola%2C%20me%20podr%C3%ADas%20dar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20colecci%C3%B3n%20disponible%3F`, '_blank');
  }
}
