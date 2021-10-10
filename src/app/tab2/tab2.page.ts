import { UpdateModalComponent } from './../update-modal/update-modal.component';
import { Component , OnInit} from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { ParticipantsService } from '../services/participants.service';
import { Toast } from '@ionic-native/toast/ngx';
import { ModalController } from '@ionic/angular';
import { DepositModalComponent } from '../deposit-modal/deposit-modal.component';
import { Participant } from 'src/app/interfaces/participants.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
 form: FormGroup;
 allParticipantsAdded = [];
  constructor(private participantsService : ParticipantsService, private modalController: ModalController ) {}

  ngOnInit(){
    
  }
  ionViewWillEnter(){
    this.allParticipantsAdded = this.participantsService.allUser;
    console.log('ngOnInit', this.allParticipantsAdded);
  }
  async openModal(){
const modal = await this.modalController.create({
  component: DepositModalComponent
});
await modal.present();
  }
  deleteParticipant(user){
    if(window.confirm('Do you want to delete user?')){
      (this.allParticipantsAdded).splice(user,1);
    }
     
  }

 async update(user: Participant){
   console.log(user)
   const updateModal = await this.modalController.create({
     component : UpdateModalComponent,
     componentProps: {
      user
    }
   });
   await updateModal.present()
  }
}
