import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { ParticipantsService } from '../services/participants.service';
import { Participant } from '../interfaces/participants.interface';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss'],
})
export class DepositModalComponent implements OnInit {
  form: FormGroup;
  allParticipantsAdded = [];
  constructor(private modalController: ModalController, private participantsService:ParticipantsService, public toastCtrl: ToastController) { }
  async openToast(text: string) {  
    const toast = await this.toastCtrl.create({  
      message: text,   
      duration: 4000  
    });  
    toast.present();  
  } 
  ngOnInit() {
    this.form = new FormGroup({
      userFirstName : new FormControl( null , {
        validators: [Validators.required]
      }),
      userLastName : new FormControl( null ,{
        validators : [Validators.required]
      }),
      userEmail: new FormControl( null, {
        validators :[Validators.required]
      }),
      phoneNumber: new FormControl( null,{
        validators : [Validators.required]
      }),
    })
  }
  add(){
      this.participantsService.addUser(this.form.value);
      this.form.reset();
      this.openToast("Added ✅ ")
      this.modalController.dismiss();
      
  }
  
  dismissModal(){
    this.modalController.dismiss();
  }

}
