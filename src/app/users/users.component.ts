import { Component, OnInit, ViewChild } from '@angular/core';
// import { gql } from '@apollo/client';
import { MatPaginator } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../services/users/users.service';
import { UserData } from '../types/types';
import { UserAddModalComponent } from './user-add-modal/user-add-modal.component';

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
  response: any;

  constructor(private usersService: UsersService, private dialog: MatDialog) {}

  displayedColumns: string[] = ['username', 'mobile', 'email'];

  dataSource: MatTableDataSource<UserData>;
  // dataSource: UserData[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this.usersService.getUsers().subscribe(
      (resp) => {
        console.log('first', resp);
        this.dataSource = new MatTableDataSource(resp);
        this.users = resp;
        // this.loading = resp.loading;
      },
      (err) => {
        console.log('err,err', err);
      }
    );
  }

  openUserDialogModal() {
    this.dialog
      .open(UserAddModalComponent)
      .afterClosed()
      .subscribe((val) => {
        if (val === 'Add User') {
          this.getAllUser();
        }
      });
  }
  // Register a user

  // registerUser() {
  //   this.response = this.usersService.registerUser();

  //   // this.apollo.mutate<CreateLinkMutationResponse>({
  //   //   mutation: CREATE_LINK_MUTATION,
  //   //   variables: {
  //   //     description: this.description,
  //   //     url: this.url
  //   //   }
  //   // }).subscribe((response) => {

  //   // });
  // }
}
