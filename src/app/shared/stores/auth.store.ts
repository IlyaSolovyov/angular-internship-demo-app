import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { User } from '../models/user';

@Injectable()
export class AuthStore {
  private readonly authUser$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  get getAuthUser(): Observable<User | null> {
    return this.getUserAsObservable(this.authUser$);
  }

  authenticate(): void {
    //Some real authentication logic would go here
    localStorage.setItem('token', 'some-user-token');
    const user = new User(2, 'Regular User', false);
    return this.authUser$.next(user);
  }

  
  authenticateAsAdmin(): void {
    //Some real authentication logic would go here
    localStorage.setItem('token', 'some-admin-token');
    const user = new User(2, 'Admin User', true);
    
    return this.authUser$.next(user);
  }

  signOut(): void {
    localStorage.removeItem('token');
    return this.authUser$.next(null);
  }

  getAccessToken(): string | null{
    return localStorage.getItem('token');
  }


  private getUserAsObservable(subject: Subject<User | null>): Observable<User | null> {
    return new Observable((fn) => subject.subscribe(fn));
  }
}
