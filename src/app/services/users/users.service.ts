import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { GET_USERS } from 'src/app/apolloclient/query/getUsersQuery';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: Observable<any[]>;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  getUsers(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: GET_USERS,
    }).valueChanges;
  }
}
