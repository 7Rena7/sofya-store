import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Clothe, ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {

  clothes: Clothe[];

  constructor(clothesService: ClothesService, public auth: AuthService) {
    this.clothes = clothesService.getAllClothes();
  }
}
