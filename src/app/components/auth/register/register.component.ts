import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  createAccount() {
    this.authService.register(this.registerForm.value)
        .then(() => this.router.navigate(['/clients', '1', 'edit']))
        .catch((err) => console.error(err.message))
  }

}
