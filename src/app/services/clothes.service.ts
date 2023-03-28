import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {
  
  private clothes: Clothe[] = [
    {
      name: 'Timber Jacket',
      nameESP: 'Leñadora Marrón',
      price: 1990,
      imgs: ['assets/clothes/jacket-timber-1.jpeg'],
      desc: '',
      idx: 1,
      quantity: 1,
      isAvailable: false,
    },
    {
      name: 'Top Star Black',
      nameESP: 'Top Star Negro',
      price: 450,
      imgs: ['assets/clothes/top-star-1.jpeg'],
      desc: '',
      idx: 2,
      quantity: 1,
      isAvailable: false,
    },
    {
      name: 'Vest Gray',
      nameESP: 'Chaleco Pufer Gris',
      price: 1490,
      imgs: ['assets/clothes/vest-gray-1.jpeg'],
      desc: '',
      idx: 3,
      quantity: 0,
      isAvailable: true,
    },
    {
      name: 'Timber Jacket',
      nameESP: 'Pollera Night',
      price: 750,
      imgs: ['assets/clothes/skirt-black-1.jpeg'],
      desc: '',
      idx: 4,
      quantity: 1,
      isAvailable: true,
    },
    {
      name: 'Sweater Pink',
      nameESP: 'Sweater Milán Rosa',
      price: 690,
      imgs: ['assets/clothes/sweater-pink-headon-1.jpeg', 'assets/clothes/sweater-pink-headon-2.jpeg'],
      desc: '',
      idx: 5,
      quantity: 1,
      isAvailable: true,
    },
    {
      name: 'Vest Brown',
      nameESP: 'Chaleco Pufer Marrón',
      price: 1490,
      imgs: ['assets/clothes/vest-brown-1.jpeg'],
      desc: '',
      idx: 6,
      quantity: 0,
      isAvailable: true,
    },
    {
      name: 'Timber Jacket',
      nameESP: 'Leñadora Azul',
      price: 1990,
      imgs: ['assets/clothes/timber-jacket-blue-1.jpeg'],
      desc: '',
      idx: 7,
      quantity: 1,
      isAvailable: true,
    },
    {
      name: 'Top Green',
      nameESP: 'Top Cameron Verde',
      price: 690,
      imgs: ['assets/clothes/top-1-green-headon-2.jpeg', 'assets/clothes/top-1-green-headon-3.jpeg', 'assets/clothes/top-1-green-back-1.jpeg'],
      desc: '',
      idx: 8,
      quantity: 1,
      isAvailable: true,
    },
    {
      name: 'Skirt Vinillo 1',
      nameESP: 'Pollera Vinillo Negra',
      price: 750,
      imgs: ['assets/clothes/skirt-vinillo-1.jpeg'],
      desc: '',
      idx: 9,
      quantity: 1,
      isAvailable: true,
    },
    {
      name: 'Top Orange',
      nameESP: 'Top Cameron Naranja',
      price: 690,
      imgs: ['assets/clothes/top-1-orange-headon-3.jpeg', 'assets/clothes/top-1-orange-headon-1.jpeg', 'assets/clothes/top-1-orange-back-1.jpeg'],
      desc: '',
      idx: 10,
      quantity: 1,
      isAvailable: true,
    },
    {
      name: 'Top Black',
      nameESP: 'Top Black',
      price: 450,
      imgs: ['assets/clothes/top-black-1.jpeg'],
      desc: '',
      idx: 11,
      quantity: 1,
      isAvailable: true,
    },
    {
      name: 'Sweater Brown',
      nameESP: 'Sweater Milán Marrón',
      price: 690,
      imgs: ['assets/clothes/sweater-brown-headon-1.jpeg', 'assets/clothes/sweater-brown-headon-2.jpeg'],
      desc: '',
      idx: 12,
      quantity: 1,
      isAvailable: true,
    },
    {
      name: 'Top Corset Black',
      nameESP: 'Top Corset Negro',
      price: 499,
      imgs: ['assets/clothes/top-corset-black-1.jpeg'],
      desc: '',
      idx: 13,
      quantity: 1,
      isAvailable: true,
    },
    {
      name: 'Top Corset Blue',
      nameESP: 'Top Corset Azul',
      price: 499,
      imgs: ['assets/clothes/top-corset-blue-1.jpeg'],
      desc: '',
      idx: 14,
      quantity: 1,
      isAvailable: true,
    },
    {
      name: 'Top White',
      nameESP: 'Top Cameron Blanco',
      price: 690,
      imgs: ['assets/clothes/top-1-white-headon-1.jpeg', 'assets/clothes/top-1-white-headon-4.jpeg', 'assets/clothes/top-1-white-back-1.jpeg'],
      desc: '',
      idx: 15,
      quantity: 1,
      isAvailable: true,
    },
    {
      name: 'Short Vinillo Black',
      nameESP: 'Short Vinillo Negro',
      price: 899,
      imgs: ['assets/clothes/short-vinillo-1.jpeg'],
      desc: '',
      idx: 16,
      quantity: 1,
      isAvailable: true,
    },
    {
      name: 'Top Corset Pink',
      nameESP: 'Top Corset Rosado',
      price: 499,
      imgs: ['assets/clothes/top-corset-pink-1.jpeg'],
      desc: '',
      idx: 17,
      quantity: 1,
      isAvailable: false,
    },
    {
      name: 'T-shirt brown',
      nameESP: 'Reme Oversize Marrón',
      price: 790,
      imgs: ['assets/clothes/tshirt-1-brown-headon-1.jpeg', 'assets/clothes/tshirt-1-brown-headon-2.jpeg'],
      desc: '',
      idx: 18,
      quantity: 1,
      isAvailable: true,
    },
    {
      name: 'Top Black',
      nameESP: 'Top Berta Negro',
      price: 590,
      imgs: ['assets/clothes/top-2-black-headon-1.jpeg'],
      desc: '',
      idx: 19,
      quantity: 1,
      isAvailable: true,
    },
    {
      name: 'T-shirt Black & White',
      nameESP: 'Reme Angola',
      price: 890,
      imgs: ['assets/clothes/tshirt-2-black:white-headon-1.jpeg'],
      desc: '',
      idx: 20,
      quantity: 1,
      isAvailable: true,
    },
    {
      name: 'Top Violet',
      nameESP: 'Top Cameron Violeta',
      price: 690,
      imgs: ['assets/clothes/top-1-violet-headon-4.jpeg', 'assets/clothes/top-1-violet-headon-1.jpeg', 'assets/clothes/top-1-violet-back-1.jpeg'],
      desc: '',
      idx: 21,
      quantity: 1,
      isAvailable: true,
    },
    {
      name: 'Top Mirlo Black',
      nameESP: 'Top Mirlo Negro',
      price: 450,
      imgs: ['assets/clothes/top-mirlo-1.jpeg'],
      desc: '',
      idx: 22,
      quantity: 1,
      isAvailable: true,
    },
  ]
  
  getAllClothes() {
    return this.clothes;
  }

  getActiveClothes() {
    return this.clothes.filter(({isAvailable, quantity}) => isAvailable && quantity > 0);
  }

  getClothe(id: number) {
    const clothe = this.clothes.filter(({idx}) => id === idx);
    return clothe.length !== 0 ? clothe[0] : null
  }

  // TODO: Search by term (add key words to clothes in desc)
  // searchClothe(term: string) {

  // }
}

export interface Clothe {
  name: string,
  nameESP: string,
  price: number,
  imgs: any[],
  desc: string,
  idx?: number,
  quantity: number,
  isAvailable: boolean,
}

// interface Top extends Clothe {
//   price: number
// }