import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLogedIn: boolean = false;

  constructor(private route: ActivatedRoute) {}

  login(email: string, password: string) {
    if (email === 'admin@admin.com' && password === '123') {
      console.log(this.route);
    }
  }
}
