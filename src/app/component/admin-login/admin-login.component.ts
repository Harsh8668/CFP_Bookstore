import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

    openSnackBar() {
    this._snackBar.open;
  }

  constructor(private formBuilder: FormBuilder, private user: UserService, private router:Router,private _snackBar : MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.valid) {
      let reqdata = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }
      this.user.alogin(reqdata).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem("token", response.result.accessToken);
        this.router.navigateByUrl("/dashboard");
        this._snackBar.open('Login Successfully', '', { duration: 2000 });
      });
    }
  }
}
