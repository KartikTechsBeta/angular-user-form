// import { Component, OnInit } from '@angular/core';
// import {
//   ReactiveFormsModule,
//   FormBuilder,
//   FormGroup,
//   Validators,
// } from '@angular/forms';
// import { NgIf, NgFor } from '@angular/common';
// import { UserService } from './services/user.service';
// import { HttpClientModule } from '@angular/common/http';
// import { Modal } from 'bootstrap';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [ReactiveFormsModule, NgIf, NgFor, HttpClientModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
// })
// export class AppComponent implements OnInit {
//   title = 'practice';
//   showForm = false;
//   userForm!: FormGroup;
//   users: any[] = [];
//   editingUserId: number | null = null;
//   userModal: Modal | null = null;

//   constructor(private fb: FormBuilder, private userService: UserService) {
//     this.userForm = this.fb.group({
//       name: ['', Validators.required],
//       age: ['', Validators.required],
//       city: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
//       gender: ['', Validators.required],
//       address: ['', Validators.required],
//     });
//   }

//   ngOnInit(): void {
//     this.loadUsers();
//   }

//   toggleForm() {
//     this.showForm = true;
//     this.editingUserId = null;
//     this.userForm.reset();
//   }

//   loadUsers() {
//     this.userService.getUsers().subscribe({
//       next: (data) => {
//         this.users = data;
//       },
//       error: (err) => {
//         console.error('Error fetching users:', err);
//       },
//     });
//   }

//   onSubmit() {
//     if (this.userForm.valid) {
//       const userData = this.userForm.value;

//       if (this.editingUserId !== null) {
//         this.userService.updateUser(this.editingUserId, userData).subscribe({
//           next: () => {
//             this.loadUsers();
//             this.userForm.reset();
//             this.editingUserId = null;
//             this.showForm = false;
//             this.userModal?.hide();
//           },
//           error: (err) => {
//             console.error('Error updating user:', err);
//           },
//         });
//       } else {
//         this.userService.addUser(userData).subscribe({
//           next: () => {
//             this.loadUsers();
//             this.userForm.reset();
//             this.showForm = false;
//             this.userModal?.hide();
//           },
//           error: (err) => {
//             console.error('Error adding user:', err);
//           },
//         });
//       }
//     }
//   }

//   editUser(user: any) {
//     this.editingUserId = user.id;
//     this.showForm = true;
//     this.userForm.patchValue({
//       name: user.name,
//       age: user.age,
//       city: user.city,
//     });
//     const modalElement = document.getElementById('userModal');
//     if (modalElement) {
//       this.userModal = new Modal(modalElement);
//       this.userModal.show();
//     }
//   }

//   deleteUser(id: number) {
//     if (confirm('Are you sure you want to delete this user?')) {
//       this.userService.deleteUser(id).subscribe({
//         next: () => {
//           this.loadUsers();
//         },
//         error: (err) => {
//           console.error('Error deleting user:', err);
//         },
//       });
//     }
//   }

//   cancelForm() {
//     this.userForm.reset();
//     this.editingUserId = null;
//     this.showForm = false;
//   }

//   closeForm() {
//     this.editingUserId = null;
//     this.userForm.reset();
//   }
//   openForm() {
//     this.editingUserId = null;
//     this.userForm.reset();
//     const modalElement = document.getElementById('userModal')!;
//     if (modalElement) {
//       this.userModal = new Modal(modalElement);
//       this.userModal.show();
//     }
//   }
// }

//  new chlega idhr se

import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgIf, NgFor , CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, HttpClientModule ,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'practice';
  showForm = false;
  userForm!: FormGroup;
  users: any[] = [];
  editingUserId: number | null = null;
  userModal: Modal | null = null;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      age: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      gender: ['', Validators.required],
      address: ['', Validators.required],
       password: ['', [
    Validators.required,
    Validators.minLength(4),
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/)
  ]],
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  // toggleForm() {
  //   this.showForm = true;
  //   this.editingUserId = null;
  //   this.userForm.reset();
  // }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      },
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;

      if (this.editingUserId !== null) {
        this.userService.updateUser(this.editingUserId, userData).subscribe({
          next: () => {
            this.loadUsers();
            this.userForm.reset();
            this.editingUserId = null;
            this.showForm = false;
            this.userModal?.hide();
          },
          error: (err) => {
            console.error('Error updating user:', err);
          },
        });
      } else {
        this.userService.addUser(userData).subscribe({
          next: () => {
            this.loadUsers();
            this.userForm.reset();
            this.showForm = false;
            this.userModal?.hide();
          },
          error: (err) => {
            console.error('Error adding user:', err);
          },
        });
      }
    }
  }

  editUser(user: any) {
    this.editingUserId = user.id;
    this.showForm = true;

    this.userForm.patchValue({
      name: user.name,
      age: user.age,
      city: user.city,
      email: user.email,
      mobile: user.mobile,
      gender: user.gender,
      address: user.address,
    });

    const modalElement = document.getElementById('userModal');
    if (modalElement) {
      this.userModal = new Modal(modalElement);
      this.userModal.show();
    }
  }

  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.loadUsers();
        },
        error: (err) => {
          console.error('Error deleting user:', err);
        },
      });
    }
  }

  cancelForm() {
    this.userForm.reset();
    this.editingUserId = null;
    this.showForm = false;
  }

  closeForm() {
    this.editingUserId = null;
    this.userForm.reset();
  }
  openForm() {
    this.editingUserId = null;
    this.userForm.reset();
    const modalElement = document.getElementById('userModal')!;
    if (modalElement) {
      this.userModal = new Modal(modalElement);
      this.userModal.show();
    }
  }
  restrictName(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^A-Za-z ]/g, '');
    this.userForm.get('name')?.setValue(input.value);
  }
  restrictMobile(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    this.userForm.get('mobile')?.setValue(input.value);
  }
}
