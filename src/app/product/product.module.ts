import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductPageComponent } from './product-page/product-page.component';
import { EditInfoComponent } from './product-page/edit-info/edit-info.component';
import {MatInputModule} from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AddInfoComponent } from './product-page/add-info/add-info.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ProductPageComponent,
    EditInfoComponent,
    AddInfoComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatInputModule, 
    MatPaginatorModule, 
    MatProgressSpinnerModule, 
    MatSortModule, 
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  exports: [
    ProductPageComponent,
    EditInfoComponent,
    AddInfoComponent
  ]
})
export class ProductModule { }
