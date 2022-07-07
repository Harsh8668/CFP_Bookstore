import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  openSnackBar() {
    this._snackBar.open;
  }

  constructor(private formBuilder: FormBuilder, private user:UserService, private _snackBar : MatSnackBar) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.maxLength(10)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.valid) {
      let reqdata = {
        fullName: this.registerForm.value.fullName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        phone:this.registerForm.value.phone
      }
      this.user.aregistration(reqdata).subscribe((response: any) => {
        console.log(response);
        this._snackBar.open('Register Successfully', '', { duration: 2000 });
      });
    }
  }
}
