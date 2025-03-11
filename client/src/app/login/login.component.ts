import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private route: ActivatedRoute){}
  ngOnInit()
  {
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
