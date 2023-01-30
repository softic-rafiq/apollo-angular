import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { REGISTER_USER } from 'src/app/apolloclient/mutation/RegisterUser';
import { GET_USERS } from 'src/app/apolloclient/query/getUsersQuery';
import { UserData } from 'src/app/types/types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: Observable<any[]>;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  fruitForm: UserData = {
    id: 0,
    username: 'Rafiq',
    mobile: '01991166550',
    email: 'rafiq@softic.ai',
  };
  // Get all users
  getUsers(): Observable<any> {
    return this.apollo
      .watchQuery<any>({
        query: GET_USERS,
      })
      .valueChanges.pipe(map((result) => result.data.getAllUsers));
    // .valueChanges.pipe(map(result => result.data.getAllUsers))
  }

  //Regkister a user
  registerUser(data: any): Observable<any> {
    console.log('Data', data);
    return this.apollo.mutate({
      mutation: REGISTER_USER,
      variables: {
        username: data.username,
        password: data.password,
        mobile: data.mobile,
        email: data.email,
      },
    });
  }
}
