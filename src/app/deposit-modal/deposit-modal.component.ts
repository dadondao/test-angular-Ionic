import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
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
  constructor(private modalController: ModalController, private participantsService:ParticipantsService) { }

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

    
  }
  
  dismissModal(){
    this.modalController.dismiss();
  }

}
