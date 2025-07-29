import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JournalListComponent} from './journal-list/journal-list.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JournalListComponent,
    RouterModule.forChild([
      { path: '', component: JournalListComponent }
    ])
  ]
})
export class JournalModule { }
