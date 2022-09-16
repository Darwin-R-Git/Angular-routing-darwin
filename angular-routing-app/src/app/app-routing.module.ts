import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponentComponent } from './animal-component/animal-component.component';
import { FruitsComponentComponent } from './fruits-component/fruits-component.component';
import { GenericComponent } from './generic/generic.component';

const routes: Routes = [
  { path: 'animals', component: AnimalComponentComponent},
  { path: 'fruits', component: FruitsComponentComponent},
  {path: '', redirectTo: '/animals', pathMatch: 'full'},
  { path: 'generic/:id', component: GenericComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
