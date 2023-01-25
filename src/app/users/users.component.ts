import { Component, OnInit, ViewChild } from '@angular/core';
// import { gql } from '@apollo/client';
import { MatPaginator } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../services/users/users.service';
import { UserData } from '../types/types';
// import { UserData } from '../types/types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  title = 'Show All User';
  users: any = [];
  loading = true;
  error: any;

  constructor(private usersService: UsersService) {}

  displayedColumns: string[] = ['username', 'mobile', 'email'];

  dataSource: MatTableDataSource<UserData>;
  // dataSource: UserData[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this.usersService.getUsers().subscribe(
      (resp) => {
        console.log('first', resp.data.getAllUsers);
        this.dataSource = new MatTableDataSource(resp.data.getAllUsers);
        this.users = resp.data.getAllUsers;
        this.loading = resp.loading;
      },
      (err) => {
        console.log('err,err', err);
      }
    );
  }
}
