import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TableTutorialsComponent } from './components/table-tutorials/table-tutorials.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

const routes: Routes = [
  { path:'', redirectTo: 'tutorials', pathMatch: 'full'},
  { path:'tutorials', component: TutorialsListComponent},
  { path:'tutorials/:id', component: TutorialDetailsComponent},
  { path:'add', component: AddTutorialComponent} ,
  {path: 'table-tutorials', component: TableTutorialsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
