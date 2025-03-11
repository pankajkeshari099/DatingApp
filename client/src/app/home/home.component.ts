import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users=[
    {id:1 ,name:"Pankaj"},
    {id:2 ,name:"Priya"},
    {id:3 ,name:"Rohit"},
    {id:4 ,name:"Rajan"},
    {id:5 ,name:"Laxman Prasad"}
  ]
  constructor(private router: Router){}
  // passData()
  // {
  //   this.router.navigate(['login',{"name":"Pankaj Keshari"}]);
  // }
  // passData2()
  // {
  //   this.router.navigate(['login'],{queryParams:{'name':'Shiva'}})
  // }
}
