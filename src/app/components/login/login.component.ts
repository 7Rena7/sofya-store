import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLogedIn: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  login(email: string, password: string) {
    if (email === 'admin@admin.com' && password === '123') {
      this.router.navigate(['../admin-panel'], {relativeTo: this.route})
    }
  }
}
