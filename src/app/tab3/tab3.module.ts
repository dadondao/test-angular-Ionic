import { NgCalendarModule } from 'ionic2-calendar';
import {CalendarModule } from 'ion2-calendar';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


import { Tab3PageRoutingModule } from './tab3-routing.module';
import { SessionModalComponent } from '../session-modal/session-modal.component';
import { UpdateSessionModalComponent } from '../update-session-modal/update-session-modal.component';
import { ParticipantModalComponent } from '../participant-modal/participant-modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    CalendarModule,
    NgCalendarModule,
    Tab3PageRoutingModule,
  ],
  declarations: [Tab3Page, SessionModalComponent,UpdateSessionModalComponent, ParticipantModalComponent],
  entryComponents: [SessionModalComponent, UpdateSessionModalComponent, ParticipantModalComponent]
})
export class Tab3PageModule {}
