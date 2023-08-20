import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private apiService:ApiService) { 

    apiService.get('/products').subscribe((res:any)=>{
      console.log(res);
      
    })
  }

  ngOnInit(): void {
  }

  onSubmit(formData: NgForm) {
    console.log(formData.value);  // { first: '', last: '' }
    console.log(formData.valid);  // false
  }

  submitBtn(formData: NgForm) {

    if (formData.value.pass == formData.value.cpass) {

      delete formData.value.cpass
      console.log(formData.value);

      this.apiService.post('/user/add',formData.value).subscribe((res)=>{
        if (res) {
          alert("SignUp Successfully")
        } else {
          alert("problem")
        }
        console.log(res);
      })

      this.router.navigateByUrl('/auth/login');
    } else {
      alert("Password Mismatch !")
    }
    
  }

}
