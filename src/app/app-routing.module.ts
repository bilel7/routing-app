import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CatsComponent} from './cats/cats.component';
import {DogsComponent} from './dogs/dogs.component';

const routes: Routes = [
  {path: 'cats', component: CatsComponent},
  {path: 'dogs', component: DogsComponent},
  {path: '', redirectTo: '/cats', pathMatch: 'full'}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
