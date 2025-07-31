import {Component} from '@angular/core';
import {DatePipe, NgForOf} from '@angular/common';
import {MarkdownModule} from 'ngx-markdown';
import {JournalEntry} from '../../../core/models/journal-entry.model';
import {JOURNAL_ENTRIES} from '../../../core/mock/journal-data';

@Component({
  selector: 'app-journal-list',
  imports: [
    NgForOf,
    DatePipe,
    MarkdownModule
  ],
  templateUrl: './journal-list.component.html',
  styleUrl: './journal-list.component.scss'
})
export class JournalListComponent {
  entries: JournalEntry[] = JOURNAL_ENTRIES;
}
