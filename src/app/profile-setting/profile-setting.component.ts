import { Component, OnInit } from '@angular/core';
import { ProfileService, IProfile } from './profile.service';
import { TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.css']
})
export class ProfileSettingComponent implements OnInit {

  public title = 'Profile';
  public isLoading:boolean=true;
  public isSavingProfile:boolean=false;
  public errMsg:string="";
  public user:IProfile;
  constructor(private profile:ProfileService, public translate: TranslateService) { 
    translate.addLangs(['en','fr','hindi']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en | fr | hindi /) ? browserLang: 'en');
  }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile(){
    this.isLoading=true;
    this.profile.getProfileUser().then((_user:IProfile)=>{
      this.user=_user;
      this.isLoading=false;
    }).catch(()=>{
      console.log("trying again to get user");
      this.loadProfile();
    })
  }

  saveProfileName(){
    this.isSavingProfile=true;
    this.errMsg="";
    this.profile.setName(this.user.firstName.trim(),this.user.lastName.trim()).then((_user:IProfile)=>{
      this.saveProfileEmail();
    }).catch((error:any)=>{
      this.isSavingProfile=false;
      this.errMsg=error.error;
    })
  }

  saveProfileEmail(){
    this.isSavingProfile=true;
    this.errMsg="";
    this.profile.setEmail().then((_user:IProfile)=>{
      this.user=_user;
      this.isSavingProfile=false;
      this.errMsg="Profile updated successfully";
    }).catch((error:any)=>{
      this.errMsg=error.error;
      this.isSavingProfile=false;
    })
  }

}