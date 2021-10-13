import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participant-modal',
  templateUrl: './participant-modal.component.html',
  styleUrls: ['./participant-modal.component.scss'],
})
export class ParticipantModalComponent implements OnInit {
  allSessionAdded = [];
  pSession = [];
  constructor() { }

  ngOnInit() {}
  viewParticipant(sessionIndex){
    this.pSession = this.allSessionAdded[sessionIndex].participant
    console.log(this.allSessionAdded[sessionIndex].participant)
  }
}
