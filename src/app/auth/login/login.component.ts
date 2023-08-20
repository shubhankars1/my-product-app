import { PlatformLocation } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service.service';
import { EventServiceService } from 'src/app/services/event-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = '1'

  show: boolean = false;

  @Output() eventRef = new EventEmitter()

  constructor(
    private router: Router, 
    private apiService:ApiService,
    private eventServiceObj:EventServiceService,
    ) { 

      console.log(localStorage.getItem('jwt'));
      
      if (localStorage.getItem('jwt')!=null || localStorage.getItem('jwt')!=undefined) {
        this.router.navigateByUrl('/home/dashboard');
      }
  }

  ngOnInit(): void {
    localStorage.setItem('SeesionUser',this.user)
  }

  onSubmit(formData: NgForm) {
    console.log(formData.value);  // { first: '', last: '' }
    console.log(formData.valid);  // false
  }


  submitBtn(formData: NgForm) {
      console.log(formData.value);

      if(formData.valid) {
debugger
      
        this.apiService.post('/user/login',formData.value).subscribe((res:any)=>{
          if (res) {
            console.log(res);
            let temp = res
            localStorage.setItem('jwt',temp.token)
            alert("Login Successfully")
            this.eventServiceObj.setData({
              'name':temp.name,
              'email':temp.email
            })
            this.router.navigateByUrl('/home/dashboard');
          } else {
            alert("problem")
          }
          console.log(res);
        },(error:any)=>{
          console.error(error)
        })
        // ==========================>
      } else {
          alert("problem")
      }
    }


    navToSignUp() {
      this.router.navigateByUrl('/auth/signup');
    }


    eyeBtn() {
      this.show = !this.show;
    }
}

