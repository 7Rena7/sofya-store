import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: Contact[] = [
    {
      name: "Romina",
      fullName: "Romina Suarez",
      phone: "+59891865424"
    },
    {
      name: "Paula",
      fullName: "Paula Suarez",
      phone: "+59891469968"
    }
  ]

  constructor() {}

  getRandomContact() {
    return this.contacts[Math.floor(Math.random() * 2)];
  }
}

export interface Contact {
  name: string,
  fullName: string,
  phone: string,
}