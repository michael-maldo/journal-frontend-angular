import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {JournalEntry} from '../../../core/models/journal-entry.model';

@Component({
  selector: 'app-editor-form',
  imports: [
    FormsModule
  ],
  templateUrl: './editor-form.component.html',
  styleUrl: './editor-form.component.scss'
})
export class EditorFormComponent {
  entry: JournalEntry;

  save() {

  }
}
