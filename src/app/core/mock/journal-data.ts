import {JournalEntry} from '../models/journal-entry.model';

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 1,
    title: 'Learning Angular Routing',
    content: '# Angular Routing\nAngular uses a powerful router module...',
    createdAt: new Date('2025-07-25'),
    tags: ['angular', 'routing']
  },
  {
    id: 2,
    title: 'PostgreSQL Indexing Tips',
    content: '## Indexing\nPostgreSQL indexing can boost performance...',
    createdAt: new Date('2025-07-20'),
    tags: ['postgres', 'database']
  }
]
