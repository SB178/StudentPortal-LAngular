import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  animations: [
    trigger('animate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.2s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.2s', style({ opacity: 0 })),
      ]),
    ]),
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  submitFlag: Number = 0;
  toggleHelperText!: String;

  constructor(
    private service: LoginServiceService,
    private router: Router,
    private formbuilder: FormBuilder
  ) {
    this.loginform = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {}
  toggle: boolean = true;

  togglePassword = () => {
    this.toggle = !this.toggle;
  };

  onhover(type: String) {
    this.toggleHelperText = type;
    console.log(this.toggleHelperText);
  }

  onSubmit() {
    this.service
      .login(this.loginform.value.username, this.loginform.value.password)
      .subscribe((data) => {
        this.submitFlag = data;
        if (data == 1) {
          this.router.navigate(['/dashboard']);
        }
      });
  }
}
