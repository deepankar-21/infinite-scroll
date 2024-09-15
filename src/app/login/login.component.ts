import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setName } from '../store/name.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  name:string = 'Welcome,Admin';

  constructor(private router:Router,private store:Store){}

  onSubmit() {
    if (this.email && this.password) {
        if(this.email == 'admin@gmail.com' && this.password == '123456'){
          this.store.dispatch(setName({ name: this.name }));
          localStorage.setItem("user",'');
          this.router.navigate(['/infinite-scroll']);
        }else{
          alert("Invalid Email or Password");
          this.router.navigate(['/login']);
        }
    }
  }
}
