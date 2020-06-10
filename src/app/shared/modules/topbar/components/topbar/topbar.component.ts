import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { Store, select } from '@ngrx/store';
import {
  isLoggedInSelector,
  isAnonymousSelector,
  currentUserSelector,
} from 'src/app/auth/store/selectors';

@Component({
  selector: 'app-mc-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  constructor(private store: Store) {}

  isLoggedIn$: Observable<boolean>;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<CurrentUserInterface | null>;

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
