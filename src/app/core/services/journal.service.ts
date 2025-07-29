import {JournalEntry} from '../models/journal-entry.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JournalService {
  private apiUrl = 'https://api.michael-maldo.biz/journal';

  constructor(private http: HttpClient) {}

  getAll(): Observable<JournalEntry[]> {
    return this.http.get<JournalEntry[]>(this.apiUrl);
  }

  get(id: number): Observable<JournalEntry> {
    return this.http.get<JournalEntry>(`${this.apiUrl}/${id}`);
  }

  create(entry: JournalEntry): Observable<JournalEntry> {
    return this.http.post<JournalEntry>(this.apiUrl, entry, this.authHeader());
  }

  update(id: number, entry: JournalEntry): Observable<JournalEntry> {
    return this.http.put<JournalEntry>(`${this.apiUrl}/${id}`, entry, this.authHeader());
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.authHeader());
  }

  private authHeader() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }
}
