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
    const user = new User(2, 'Regular User', false);
    return this.authUser$.next(user);
  }

  
  authenticateAsAdmin(): void {
    //Some real authentication logic would go here
    const user = new User(2, 'Admin User', true);
    return this.authUser$.next(user);
  }

  signOut(): void {
    return this.authUser$.next(null);
  }


  private getUserAsObservable(subject: Subject<User | null>): Observable<User | null> {
    return new Observable((fn) => subject.subscribe(fn));
  }
}
