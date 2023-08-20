import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
// import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  name : any
  email : any
  userinfo = false
  constructor(
      private router: Router,
      private eventServiceObj:EventServiceService
    ) {
      // console.log(localStorage.getItem('jwt'));
      
      eventServiceObj.triggeredData.subscribe((res:any)=>{
        console.log(res);
        
        this.name = res.name
        this.email = res.email
      }) 
  }

  ngOnInit(): void {
  }

  navToDashboard() {
    alert(`this is my homepage`)
    // window.location.reload();
  }

  navToProduct() {
    this.router.navigateByUrl('/product/productpage');
  }

  navToAlert() {
    alert('Call us on +91 9988665500')
  }

  logoutAndNavToHome() {
    localStorage.removeItem('jwt')
    alert('you have logged out successfully')
    this.router.navigateByUrl('');
  }

  navBtn() {
    this.router.navigateByUrl('/product/productpage');

  }

  navToEmail() {
    alert(`email your query at ${this.email}`)
  }

  avatarBtn() {
    this.userinfo = true
  }

  accountBtn() {
    alert(`${this.name}, your email account is ${this.email}`)
  }

  reachBtn() {
    alert(`reach us at   www.google.com`)
  }
}

