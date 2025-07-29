import { Routes } from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';
import {LoginComponent} from './core/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'journal', pathMatch: 'full' },
  { path: 'journal', loadChildren: () => import('./features/journal/journal.module').then(m => m.JournalModule) },
  { path: 'editor', loadChildren: () => import('./features/editor/editor.module').then(m => m.EditorModule), canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];
