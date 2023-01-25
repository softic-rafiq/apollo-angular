import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { GET_COUNTRIES } from '../apolloclient/query/getCountryQuery';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  countries: Observable<any[]>;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  getCountries(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: GET_COUNTRIES,
    }).valueChanges;
  }
}
