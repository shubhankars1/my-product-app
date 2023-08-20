import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ProductModel } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api-service.service';
import { AddInfoComponent } from './add-info/add-info.component';
import { EditInfoComponent } from './edit-info/edit-info.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, AfterViewInit {

  data : any

  dataSource : any

  displayedColumns : any

  dataLength = 0

  startDate = '';
  endDate = '';

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  item: any;


  constructor(
    private router: Router,
    private apiService: ApiService,
    public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer
  ) { 
    
    

    apiService.get('/products').subscribe((res:any)=>{
      console.log('Hello');
      
      this.data = res;
      console.log(this.data.Products[0].createdOn);
      
    })

    this.displayedColumns = ['_id', 'name', 'barcode', 'createdOn', 'expiredOn', 'price', 'qty', 'action'];

    //product model object created
    let productObj = new ProductModel();
    
    
  }

  ngOnInit(): void {
    this.apiService.get('/products').subscribe((res:any)=>{
      console.log(res);

      this.data = res;
      this.dataSource = new MatTableDataSource(this.data.Products);

      this.dataLength=this.data.Products.length;
      
    })
    
  }

  ngAfterViewInit(): void {

    this.apiService.get('/products').subscribe((res)=>{
      this.data = res;
      this.dataSource = new MatTableDataSource(this.data.Products);

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }


  onRowClicked(row:any) {
    console.log('Row clicked: ', row);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(productRecord:any): void {
  
    const dialogRef = this.dialog.open(EditInfoComponent, {
      width: '250px',
      data: productRecord,
    });

    dialogRef.afterClosed()
      .subscribe((result:any) => {
        this.apiService.get('/products').subscribe((res:any)=>{
          this.data = res;
          this.dataLength=this.data.Products.length;
          this.dataSource = new MatTableDataSource(this.data.Products);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        })
    });
  }

  deleteDialog(productRecord:any): void {
    this.apiService.delete(`/products/${productRecord._id}`).subscribe((res:any)=>{
      console.log(res);
      alert("record successfully deleted ")
      // window.location.reload()
      this.apiService.get('/products').subscribe((res:any)=>{
        this.data = res;
        this.dataLength=this.data.Products.length;
        this.dataSource = new MatTableDataSource(this.data.Products);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
    });
  }


  addInfoDialog() {
    const dialogRef = this.dialog.open(AddInfoComponent, {
      width: '250px',
    });

    dialogRef.afterClosed()
      .subscribe((result:any) => {
        this.apiService.get('/products').subscribe((res:any)=>{
          this.data = res;
          console.log(this.data);
          this.dataLength=this.data.Products.length;
          this.dataSource = new MatTableDataSource(this.data.Products);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        })
      });
  }


  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


  // =======================>
  // search btn
  searchBtn() {

    this.startDate = this.getDateFromString(this.startDate)
    this.endDate = this.getDateFromString(this.endDate)
        
    this.apiService.get('/products').subscribe((res)=>{
      this.data = res.Products

      this.data = this.data.filter(item => moment(item.createdOn).isBetween(this.startDate, this.endDate))
      console.log(this.data);
      
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      
    })
  }


  getDateFromString(str) : string {
    var event = new Date(str);
    let date = JSON.stringify(event)
    date = date.slice(1,11)
    return date
  }

}
function replace(arg0: RegExp, arg1: string): any {
  throw new Error('Function not implemented.');
}

