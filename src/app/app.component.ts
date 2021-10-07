import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-control';
  loged = false;

  constructor(private _route:Router){}

  ngOnInit(): void {
  console.log(this.loged)
  }
  procesar=(event:any)=>{
    this.loged = event;
    this._route.navigate(["/Home"]);
  }
}
