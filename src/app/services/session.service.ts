import { Injectable } from '@angular/core';
import { Session } from '../interfaces/session.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private _allSession : Session [] =[
    { sessionName : 'BackToSchool',
      date : '18-10-21',
      participant: [
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
      ]
    }
  ]
  get allSession(){
    return this._allSession;
  }

  constructor() { }

  addSession(session : Session){
    this._allSession = [session, ...this._allSession]
  }
}
