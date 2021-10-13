import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Participant } from '../interfaces/participants.interface';
import { ParticipantsService } from '../services/participants.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss'],
})
export class UpdateModalComponent implements OnInit {
  @Input() user : Participant;


  constructor(private modalController: ModalController,
     private participantsService: ParticipantsService, 
     public toastCtrl: ToastController) { }
      updateForm: FormGroup;
      _allUsers = this.participantsService.allUser

  async openToast(text: string) {  
    const toast = await this.toastCtrl.create({  
      message: text,   
      duration: 4000  
    });  
    toast.present();  
  }  

  ngOnInit() {
    this.updateForm = new FormGroup({
      userFirstName : new FormControl(this.user ? this.user.userFirstName: null , {
        validators: [Validators.required]
      }),
      userLastName : new FormControl(this.user ? this.user.userLastName: null ,{
        validators : [Validators.required]
      }),
      userEmail: new FormControl(this.user ? this.user.userEmail: null, {
        validators :[Validators.required]
      }),
      phoneNumber: new FormControl(this.user ? this.user.phoneNumber: null,{
        validators : [Validators.required]
      }),
    })
  }
  update(){
     this.user.userFirstName = this.updateForm.value.userFirstName
     this.user.userLastName = this.updateForm.value.userLastName
     this.user.userEmail = this.updateForm.value.userEmail
     this.user.phoneNumber = this.updateForm.value.phoneNumber
     this.updateForm.reset();
     this.modalController.dismiss();
     this.openToast("Updated 🟡 ")
  }

  dismissModal(){
    this.modalController.dismiss();
  }
}
