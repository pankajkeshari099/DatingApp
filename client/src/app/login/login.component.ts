import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private route: ActivatedRoute) { }
  formData = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')]),
    password: new FormControl('',[Validators.required]),
  })
  submitForm() {
    console.log(this.formData.value);
  }
  get email()
  {
    return this.formData.get('email') 
  }
  get password()
  {
    return this.formData.get('password') 
  }
  // setValues()
  // {
  //   this.formData.setValue({
  //     email:'Pankaj',
  //     password:'123'
  //   })
  // }
  ngOnInit() {
    // let name = this.route.snapshot.paramMap.get('name');
    // this.route.queryParams.subscribe(param=>{
    //   let name = param['name'];
    //   alert(name); 
    // })
    // alert(name);
    // this.route.data.subscribe(data=>{
    //   console.log(data['name']);
    // })
  }
}
