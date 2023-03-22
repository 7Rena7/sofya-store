import { Component } from '@angular/core';
import { Clothe, ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-clothes-card',
  templateUrl: './clothes-card.component.html',
  styleUrls: ['./clothes-card.component.css']
})
export class ClothesCardComponent {
  
  clothes: Clothe[];

  constructor(private clotheService: ClothesService) {
    this.clothes = this.clotheService.getAllClothes()
  }

  askForProductWhatsApp(productName: string) {
    window.open(`https://wa.me/+59891865424?text=Hola%2C%20estoy%20interesad%40%20en%20la%20prenda%20${productName}%2C%20podr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n%3F`, '_blank');
  }

}
