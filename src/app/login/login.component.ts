import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  show = false;
  formLogin: FormGroup;

  @Output()
  propagar = new EventEmitter<boolean>(false);

  constructor() { }

  ngOnInit(): void {
    this.iniciarElementos();
  }

  iniciarElementos=()=>{
    this.formLogin  =  new FormGroup(
      {
        usuario: new FormControl('',[Validators.required]),
        pass: new FormControl('',[Validators.required])
      }
    );
  }

  validate =()=>{
    if(!this.formLogin.valid)
    {
      this.formLogin.markAllAsTouched();
      return;
    }
    this.show = true;
    setTimeout(() => {
      this.show = true;
      this.propagar.next(true);
    }, 500);
  }
}
