import { Component, OnInit } from '@angular/core';
// import { gql } from '@apollo/client';
import { HomeService } from '../services/home.service';

// We use the gql tag to parse our query string into a query document
// const GET_COUNTRIES = gql`
//   query ExampleQuery {
//     countries {
//       code
//       name
//     }
//   }
// `;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'apollo-angular';
  countries: any = [];
  loading = true;
  error: any;

  constructor(private homeService: HomeService) {}
  ngOnInit() {
    this.getCountry();
  }

  getCountry() {
    this.homeService.getCountries().subscribe(
      (resp) => {
        this.countries = resp.data.countries;
        this.loading = resp.loading;
      },
      (err) => {
        console.log('err,err', err);
      }
    );
  }
}
