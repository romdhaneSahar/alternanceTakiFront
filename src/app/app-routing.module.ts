import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFilesComponent } from './components/all-files/all-files.component';
import { ArchievedComponent } from './components/archieved/archieved.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { StarredComponent } from './components/starred/starred.component';

const routes: Routes = [
  {path:"home",component: HomeComponent },
  {path:"allFiles",component: AllFilesComponent },
  {path:"starred",component: StarredComponent },
  {path:"archieved",component: ArchievedComponent },
  {path:"layout",component:LayoutComponent},
  {path:"",redirectTo :"home" ,pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
