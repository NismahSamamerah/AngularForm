import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
pass :string =''
confirmPass :string =''
  constructor() { }

  ngOnInit(): void {
  }
onSubmit(user :any){

  console.log(user);

}
}
