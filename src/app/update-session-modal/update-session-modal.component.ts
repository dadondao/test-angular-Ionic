import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Session } from '../interfaces/session.interface';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-update-session-modal',
  templateUrl: './update-session-modal.component.html',
  styleUrls: ['./update-session-modal.component.scss'],
})
export class UpdateSessionModalComponent implements OnInit {
  @Input() session : Session
  sessionForm : FormGroup
  constructor(private modalController: ModalController, 
    private toastCtrl: ToastController) { }
  async openToast(text: string) {  
    const toast = await this.toastCtrl.create({  
      message: text,   
      duration: 4000  
    });  
    toast.present();  
  }  

  ngOnInit() {
    this.sessionForm = new FormGroup({
      sessionName: new FormControl(this.session ? this.session.sessionName: null, {
        validators : [Validators.required]
      }),
      date : new FormControl(this.session ? this.session.date: null, { 
        validators : [Validators.required]
      }),
      participant: new FormControl()
    })
  }
  update(){
    this.session.sessionName = this.sessionForm.value.sessionName
    this.session.date = this.sessionForm.value.date
    this.sessionForm.reset();
    this.modalController.dismiss();
    this.openToast("Updated 🟡 ")
 }

  dismissModal(){
    this.modalController.dismiss();
  }

}
