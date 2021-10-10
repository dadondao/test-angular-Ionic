import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from '../services/participants.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  allParticipantsAdded = [];

  constructor(private participantsService: ParticipantsService) {}
  ngOnInit(){
    this.allParticipantsAdded = this.participantsService.allUser;
    console.log('ngOnInit', this.allParticipantsAdded);
  }
  ionViewWillEnter(){
    this.allParticipantsAdded = this.participantsService.allUser;
    console.log('ngOnInit', this.allParticipantsAdded);
  }
}
