import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  standalone : true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  errorMsg = '';
  validUsername = 'Admin';
  validPassword = '123';

constructor (private fb: FormBuilder, private router: Router) {

this.loginForm = this.fb.group ({
  username : ['', Validators.required],
  password : ['', Validators.required]
});

}



ngOnInit(): void {
  console.log("Log component init");
  
}

login(){
  if (this.loginForm.invalid) return;

  const {username, password} = this.loginForm.value;

if(username === this.validUsername && password === this.validPassword){
  console.log("Login Success");

  this.router.navigateByUrl('/dashboard');
  
}else{
  console.log("Invalid Username");
  
}

}

ngOnDestroy(){
  console.log("Component destroyed");
  
}

}
