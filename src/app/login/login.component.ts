import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../_model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  loginForm = new FormGroup({email: new FormControl(''), 
                              password: new FormControl(''),
  });

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")]],
      password: ['', Validators.required]
    })
  }

  loginUser(){
    this.loading = true
    const formData = this.loginForm.value;

    const payload: Login = {
      email: formData.email,
      password: formData.password
    }

    console.log("Login", payload);
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

}
