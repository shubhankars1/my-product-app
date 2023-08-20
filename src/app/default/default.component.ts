import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  img = "https://images.pexels.com/photos/4210784/pexels-photo-4210784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  isSlideChecked: boolean;
  isStyleSlideChecked: boolean;
  fontVal: string = `16px`
  colorVal:string

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(){
    localStorage.clear()
    this.router.navigateByUrl('/auth/login');
  }


  themeBtn($event: MatSlideToggleChange) {
    this.isSlideChecked = $event.checked;
    if (this.isSlideChecked) {
      this.img = "https://www.pixelstalk.net/wp-content/uploads/images6/New-year-2022-desktop-wallpapers-HD.jpg"
    } else {
      this.img = "https://images.pexels.com/photos/4210784/pexels-photo-4210784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  }

  styleBtn($event: MatSlideToggleChange) {
    this.isStyleSlideChecked = $event.checked;

    if (this.isStyleSlideChecked) {
      this.fontVal = `25px`
      this.colorVal = `greenyellow`
    } else {
      this.fontVal = `16px`
      this.colorVal = `#555`

    }

  }
}
