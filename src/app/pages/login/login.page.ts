import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route: Router) {}
  email: string
  password: string

  ngOnInit() {}

  handleSubmit() {
    if (this.email && this.password) {
      this.route.navigate(['/my-page'])
    }
  }

}
