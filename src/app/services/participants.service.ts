import { Injectable } from '@angular/core';
import { Participant } from 'src/app/interfaces/participants.interface';



@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  private _allUser : Participant[] = [
    {
      userFirstName: 'Dado',
      userLastName: 'Ndao',
      phoneNumber: '0758920549',
      userEmail: 'endaodado@gmail.com',

    },
    { 
      userFirstName: 'Oumou',
      userLastName: 'wone',
      phoneNumber: '0758920549',
      userEmail: 'oumouwone@gmail.com',

    },
    {
      userFirstName: 'Cheikh',
      userLastName: 'Sow',
      phoneNumber: '0758920549',
      userEmail: 'cheikhsow@gmail.com',

    },
  ];

  get allUser(){
    return this._allUser;
  }

  constructor() { }

  addUser(user : Participant){
    this._allUser = [user, ...this._allUser];
    
  }
  
}
