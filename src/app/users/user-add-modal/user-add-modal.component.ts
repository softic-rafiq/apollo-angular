import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-add-modal',
  templateUrl: './user-add-modal.component.html',
  styleUrls: ['./user-add-modal.component.css'],
})
export class UserAddModalComponent {
  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService
  ) {}
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  registerUser(): void {
    console.log('Add user');
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.userService.registerUser(this.userForm.value).subscribe({
        next: () => {
          alert('User added successfully');
          this.userForm.reset();
          // this.userForm.close('save');
        },
        error: (err) => {
          alert('Something wromng!');
        },
      });
    }
  }
}
