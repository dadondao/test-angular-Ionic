import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { SessionModalComponent } from '../session-modal/session-modal.component';
import { FormGroup } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { Session } from '../interfaces/session.interface';
import { UpdateSessionModalComponent } from '../update-session-modal/update-session-modal.component';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  sessionForm : FormGroup;
  allSessionAdded = [];
  pSession = [];
  
  constructor(private modalController : ModalController , 
    private sessionService : SessionService,private toastCtrl: ToastController) {}

    async openToast(text: string) {  
      const toast = await this.toastCtrl.create({  
        message: text,   
        duration: 4000  
      });  
      toast.present();  
    }  
  
  
  ngOnInit(){
    
  }
  ionViewWillEnter(){
   this.allSessionAdded = this.sessionService.allSession
   console.log('affiche' , this.allSessionAdded)
  
  }
  deleteSession(sessionIndex){
    (this.allSessionAdded).splice(sessionIndex,1)
  }
  
  async openModal(){
    const modal = await this.modalController.create({
      component: SessionModalComponent
    });
    await modal.present();
      }
      viewParticipant(sessionIndex){
        this.pSession = this.allSessionAdded[sessionIndex].participant
        console.log(this.allSessionAdded[sessionIndex].participant)
      }
      async updateSessionModal(session: Session){
        const updateModal = await this.modalController.create({
          component : UpdateSessionModalComponent,
          componentProps: {
           session
         }
        });
        await updateModal.present()
  }
}
