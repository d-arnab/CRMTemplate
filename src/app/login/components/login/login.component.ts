import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() submitEM = new EventEmitter();
  showError:boolean;
  errorMessage:string = 'Username or password invalid';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private route: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  LoginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.LoginForm.valid) {
      console.log("LoginForm:",this.LoginForm);
      if(this.LoginForm.value.username === "user1" && this.LoginForm.value.password === "1234"){
        localStorage.setItem("isLogIn","true");
        this.router.navigate(['/home/dashboard'], { relativeTo: this.route });
      }
      else{
        this.showError = true
        this.errorMessage = 'Username or password invalid';
        this.openSnackBar(this.errorMessage)
      }
    }else{
      this.showError = true
      this.errorMessage = "please provide valid userName and password"
      this.openSnackBar(this.errorMessage)
    }
  }

  openSnackBar(errorMssg:string) {
    this._snackBar.open( errorMssg, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 1500
    });
  }

}
