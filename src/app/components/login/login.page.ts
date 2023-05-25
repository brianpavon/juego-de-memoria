import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formRegistro:FormGroup;
  
  constructor(private auth : AuthService,private fb : FormBuilder) { 
    this.formRegistro = this.fb.group(
      {
        'email':['',[Validators.required,Validators.email]],
        'pass':['',[Validators.required,Validators.minLength(6)]]
      }
    );
  }

  ngOnInit() {
  }

  async login(){
    try {
      await this.auth.login(this.formRegistro.value.email,this.formRegistro.value.pass);
      this.formRegistro.reset();
    } catch (error) {
      console.log(error);      
    }
  }

  logueoRapido(email:string,pass:string){
    this.formRegistro.controls['email'].patchValue(email);
    this.formRegistro.controls['pass'].patchValue(pass);
  }

}
