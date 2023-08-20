import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL: string;


  constructor(
    private http: HttpClient,
  ) {
    this.API_URL = 'http://localhost:3000/api';

  }



  private formatErrors(error: any) {
    return throwError(error.error);
  }



  get(path: string) {
    return this.http.get<ProductModel>(`${this.API_URL}${path}`).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: object = {}) {
    return this.http.post(`${this.API_URL}${path}`, body).pipe(catchError(this.formatErrors));
  }

  patch(path: any, body: object = {}) {
    return this.http.patch<ProductModel>(`${this.API_URL}${path}`, body).pipe(catchError(this.formatErrors));
  }

  put(path: any, body: object = {}) {
    return this.http.put<ProductModel>(`${this.API_URL}${path}`, body).pipe(catchError(this.formatErrors));
  }

  delete(path: any) {
    return this.http.delete(`${this.API_URL}${path}`).pipe(catchError(this.formatErrors));
  }

  upload(path: any, body: FormData) {
    return this.http.put(`${this.API_URL}${path}`, body).pipe(catchError(this.formatErrors));
  }
}