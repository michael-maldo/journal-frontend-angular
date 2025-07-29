import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JournalListComponent} from './journal-list/journal-list.component';
import {RouterModule} from '@angular/router';
import {JournalViewComponent} from './journal-view/journal-view.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JournalListComponent,
    RouterModule.forChild([
      { path: '', component: JournalListComponent },
      { path: ':id', component: JournalViewComponent }
    ])
  ]
})
export class JournalModule { }
