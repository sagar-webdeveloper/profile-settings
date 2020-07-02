import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileSettingComponent} from './profile-setting/profile-setting.component';


const routes: Routes = [
  { path: "", component: ProfileSettingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
