import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductModel } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss']
})
export class EditInfoComponent implements OnInit {

  windowsForm: FormGroup;
  productObj: ProductModel;
  formDataIndex: number;
  formData: import("c:/Users/LEO/Desktop/InterviewProject/interviewAssignment/src/app/models/product.model").RecordModel;

  constructor(
        public dialogRef: MatDialogRef<EditInfoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private apiService: ApiService
  ) { 
    this.windowsForm = new FormGroup({});
    this.formInit();


    this.productObj = new ProductModel();
    apiService.get('/products').subscribe((res)=>{
      this.productObj.Products = res.Products;
      console.log(this.productObj);
    })
  }

  ngOnInit(): void {

    this.windowsForm.patchValue({
      // _id:this.data._id,
      name:this.data.name,
      barcode:this.data.barcode,
      createdOn:this.data.createdOn,
      expiredOn:this.data.expiredOn,
      price:this.data.price,
      qty:this.data.qty
    });    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  formInit() {
    this.windowsForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      barcode: new FormControl("", [Validators.required]),
      createdOn: new FormControl("", [Validators.required]),
      expiredOn: new FormControl("", [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      qty: new FormControl(0, [Validators.required]),
      // _id: new FormControl(0, [Validators.required])
    })
  }

  submitBtn() {

    this.productObj.Products.push(this.windowsForm.value);
    this.formDataIndex = this.productObj.Products.length-1;
    this.formData = this.productObj.Products[this.formDataIndex]

    this.formData.createdOn = this.getDateFromString(this.formData.createdOn)
    this.formData.expiredOn = this.getDateFromString(this.formData.expiredOn)

    // ==================>

    if(this.windowsForm.valid && this.idCheck()) {
      this.apiService.patch(`/products/${this.data._id}`,this.formData).subscribe((res)=>{
        if(res) {
          alert("data successfully edited ")
          this.windowsForm.reset();
          this.dialogRef.close();
        }
        console.log(res);
      }) 

      console.log(this.windowsForm.value);

    } else {
      this.windowsForm.markAllAsTouched();
    }  
  }

  resetBtn() {}

  idCheck() {
    console.log(25);
    return new Promise((resolve, reject) => {
      this.apiService.get('/products').toPromise().then((res: ProductModel) => {
        const index = res.Products.findIndex(x => x._id === this.windowsForm.value._id)
        console.log(index);

        if (index >= 0) {
          alert(`ID ${this.windowsForm.value._id} already exists !`)
          reject({})
        } else {
          resolve({})
        }
      })
    })
  }


  getDateFromString(str) : string {
    var event = new Date(str);
    let date = JSON.stringify(event)
    date = date.slice(1,11)
    return date
  }

}

