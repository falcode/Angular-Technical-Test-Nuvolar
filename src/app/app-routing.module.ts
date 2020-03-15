import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/pages/home/home.component';
import { GituserComponent } from 'src/pages/gituser/gituser.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'Home'}},
  { path: 'home/:id', component: GituserComponent, data: { animation: 'GitUser'}},
  { path: '**', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
