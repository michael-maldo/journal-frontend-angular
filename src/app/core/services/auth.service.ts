import {Injectable} from '@angular/core';
import {tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loginUrl = 'https://api.michael-maldo.biz/auth/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(this.loginUrl, { username, password }).pipe(
      tap(res => localStorage.setItem('token', res.token))
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
