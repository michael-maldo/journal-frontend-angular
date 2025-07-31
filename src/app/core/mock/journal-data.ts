import {JournalEntry} from '../models/journal-entry.model';

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 1,
    title: 'Learning Angular Routing',
    content: `
    ## Angular Routing
     Angular uses a powerful router module...

     My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

     I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [\`code\`](#code).

              ssda
              sdsda
              sdaasd

    `,
    createdAt: new Date('2025-07-25'),
    tags: ['angular', 'routing']
  },
  {
    id: 2,
    title: 'PostgreSQL Indexing Tips',
    content: `
<https://www.markdownguide.org>
<fake@example.com>

## Indexing
PostgreSQL indexing can boost performance...

> sdaadsdas


1. sdadsa
    - 2323132

       asddsa dsaddsa

    - asdsda **321xxxx**

    asddsa sdasdaasd  sdasadsda



            sfdfdsfds

            <!-- sadsdasdasd -->
            <html>
                <head>sdsad</head>
                <body></body>
            </html>

2. sdaasdsda
`,
    createdAt: new Date('2025-07-20'),
    tags: ['postgres', 'database']
  }
]
