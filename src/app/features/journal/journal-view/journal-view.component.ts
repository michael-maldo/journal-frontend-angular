import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkdownComponent} from 'ngx-markdown';
import {JournalEntry} from '../../../core/models/journal-entry.model';
import {ActivatedRoute} from '@angular/router';
import {JOURNAL_ENTRIES} from '../../../core/mock/journal-data';

@Component({
  selector: 'app-journal-view',
  imports: [CommonModule, MarkdownComponent],
  templateUrl: './journal-view.component.html',
  styleUrl: './journal-view.component.scss'
})
export class JournalViewComponent {
  entry: JournalEntry | undefined;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.entry = JOURNAL_ENTRIES.find(e => e.id === id);
  }

}
