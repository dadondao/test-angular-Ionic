import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { ParticipantsService } from '../services/participants.service';
import { Participant } from '../interfaces/participants.interface';
import { Session } from '../interfaces/session.interface';
import { validators } from '@ionic/cli-framework';

@Component({
  selector: 'app-session-modal',
  templateUrl: './session-modal.component.html',
  styleUrls: ['./session-modal.component.scss'],
})
export class SessionModalComponent implements OnInit {
  sessionForm : FormGroup;
  allParticipantsAdded = [];
  participantOfSession = [];
  session : Session;
  constructor(private modalController: ModalController, private sessionService : SessionService , private toastCtrl : ToastController, private participantsService : ParticipantsService) { }
  async openToast(text: string) {  
    const toast = await this.toastCtrl.create({  
      message: text,   
      duration: 4000  
    });  
    toast.present();  
  }  
      
   
  ngOnInit() {
    this.sessionForm = new FormGroup({
      sessionName: new FormControl(null, {
        validators : [Validators.required]
      }),
      date : new FormControl(null, { 
        validators : [Validators.required]
      }),
      participant: new FormControl()
    })
  }
  ionViewWillEnter(){
    this.allParticipantsAdded = this.participantsService.allUser;
    console.log('ngOnInit', this.allParticipantsAdded);
  }

  dismissModal(){
    this.modalController.dismiss();
  }

  saveSession(){
    this.sessionForm.value.participant = this.participantOfSession
    this.sessionService.addSession(this.sessionForm.value)
      this.sessionForm.reset();
      this.openToast("Added ✅ ")
      this.modalController.dismiss();
      console.log(this.sessionService.allSession)
  }
  addParticipant(user){
    this.participantOfSession.push(this.allParticipantsAdded[user])
    return this.participantOfSession
  }
}
