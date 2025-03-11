import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent{
    constructor(private router: ActivatedRoute){}
    ngOnInit()
    {
        // 1st way
        // let id = this.router.snapshot.paramMap.get('id');
        // console.log("id",id);

        // 2nd way
        this.router.params.subscribe(param=>{
            console.log("id",param['id']);
        })
    }
}