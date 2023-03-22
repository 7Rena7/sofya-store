import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {
  
  private clothes: Clothe[] = [
    {
      name: 'Sweater Pink',
      nameESP: 'Sweater Milán Rosa',
      price: 690,
      imgs: ['assets/clothes/sweater-pink-headon-1.jpeg', 'assets/clothes/sweater-pink-headon-2.jpeg'],
      desc: '',
      idx: 0,
    },
    {
      name: 'Sweater Brown',
      nameESP: 'Sweater Milán Marrón',
      price: 690,
      imgs: ['assets/clothes/sweater-brown-headon-1.jpeg', 'assets/clothes/sweater-brown-headon-2.jpeg'],
      desc: '',
      idx: 1,
    },
    {
      name: 'Top Green',
      nameESP: 'Top Cameron Verde',
      price: 690,
      imgs: ['assets/clothes/top-1-green-headon-2.jpeg', 'assets/clothes/top-1-green-headon-3.jpeg', 'assets/clothes/top-1-green-back-1.jpeg'],
      desc: '',
      idx: 2,
    },
    {
      name: 'Top Orange',
      nameESP: 'Top Cameron Naranja',
      price: 690,
      imgs: ['assets/clothes/top-1-orange-headon-3.jpeg', 'assets/clothes/top-1-orange-headon-1.jpeg', 'assets/clothes/top-1-orange-back-1.jpeg'],
      desc: '',
      idx: 3,
    },
    {
      name: 'Top Violet',
      nameESP: 'Top Cameron Violeta',
      price: 690,
      imgs: ['assets/clothes/top-1-violet-headon-4.jpeg', 'assets/clothes/top-1-violet-headon-1.jpeg', 'assets/clothes/top-1-violet-back-1.jpeg'],
      desc: '',
      idx: 4,
    },
    {
      name: 'Top White',
      nameESP: 'Top Cameron Blanco',
      price: 690,
      imgs: ['assets/clothes/top-1-white-headon-1.jpeg', 'assets/clothes/top-1-white-headon-4.jpeg', 'assets/clothes/top-1-white-back-1.jpeg'],
      desc: '',
      idx: 5,
    },
    {
      name: 'Top Black',
      nameESP: 'Top Berta Negro',
      price: 690,
      imgs: ['assets/clothes/top-2-black-headon-1.jpeg'],
      desc: '',
      idx: 6,
    },
    {
      name: 'T-shirt brown',
      nameESP: 'Remera Marrón',
      price: 790,
      imgs: ['assets/clothes/tshirt-1-brown-headon-1.jpeg', 'assets/clothes/tshirt-1-brown-headon-2.jpeg'],
      desc: '',
      idx: 7,
    },
    {
      name: 'T-shirt Black & White',
      nameESP: 'Remera Blanca y Negra',
      price: 890,
      imgs: ['assets/clothes/tshirt-2-black:white-headon-1.jpeg'],
      desc: '',
      idx: 8,
    }
  ]

  getAllClothes() {
    return this.clothes;
  }

  // TODO: Search by term (add key words to clothes in desc)
  // searchClothe(term: string) {

  // }
}

export interface Clothe {
  name: string,
  nameESP: string,
  price: number,
  imgs: string[],
  desc: string,
  idx?: number,
}

// interface Top extends Clothe {
//   price: number
// }