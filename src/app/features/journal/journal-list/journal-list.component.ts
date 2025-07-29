import {Component, NgIterable} from '@angular/core';
import {DatePipe, NgForOf} from '@angular/common';
import {MarkdownComponent} from 'ngx-markdown';
import {JournalEntry} from '../../../core/models/journal-entry.model';

@Component({
  selector: 'app-journal-list',
  imports: [
    NgForOf,
    DatePipe,
    MarkdownComponent
  ],
  templateUrl: './journal-list.component.html',
  styleUrl: './journal-list.component.scss'
})
export class JournalListComponent {
  // entries: (NgIterable<unknown> & NgIterable<any>) | undefined | null;

  entries: JournalEntry[] = [
    {
      title: 'Getting started with Angular 19',
      content: '# Angular 19\n\nLearning standalone APIs.',
      tags: ['angular', 'standalone'],
      createdAt: new Date()
    },
    {
      title: 'Deployed first app',
      content: '## Milestone\n\nDeployed to VPS at `journal.michael-maldo.biz`.',
      tags: ['deployment', 'vps'],
      createdAt: new Date()
    }
  ];
}
