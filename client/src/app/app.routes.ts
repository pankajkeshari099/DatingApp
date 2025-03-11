import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    { path: 'registration', component: RegistrationComponent },
    // { path: 'login', component: LoginComponent,data:{name:"rajan keshari"} },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
    {path: 'user/:id', component:UserComponent}
];
