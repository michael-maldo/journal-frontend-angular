export interface JournalEntry {
  id?: number;
  title: string;
  content: string;
  tags: string[];
  createdAt?: Date;
}
