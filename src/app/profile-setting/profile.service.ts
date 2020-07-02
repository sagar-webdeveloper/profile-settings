import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'url';

export interface IProfile{
  firstName:string;
  lastName:string;
  username:string;
  email:string;
  age:number;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public user:IProfile;
  constructor() { }

  getProfileUser():Promise<IProfile>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        if(Math.round(Math.random())){
          this.user={
            firstName:'Micheal',
            lastName:'Collins',
            email:'',
            username:'michael.collins',
            age:30
          };
          resolve(this.user);
        }else
          reject({error:'Profile not found'});
      }, Math.random()*3000);
    })
  }

  setName(firstName:string,lastName:string){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        if(Math.round(Math.random())){
          this.user.firstName=firstName;
          this.user.lastName=lastName;
          this.user.username=firstName+ '.'+ lastName;
          resolve(this.user);
        }else
          reject({error:'Invalid name'});
      }, Math.random()*3000);
    })
  }

  setEmail(){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        if(Math.round(Math.random())){
          this.user.email=this.user.firstName+this.user.lastName+"@blueface.com";
          resolve(this.user);
        }else
          reject({error:'Error on Email Generation'});
      }, Math.random()*5000);
    })
  }
}