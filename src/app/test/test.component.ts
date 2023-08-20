import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  agents : Observable<string>
  agentName : string

  student = ['ram', 'shyam', 'mohan']
  student$ : Observable<string[]> = of(this.student)

  studentObj = {name:'ram', id:'1'}
  studentObj$ : Observable<any> = of(this.studentObj)

  labour = ['ramesh','raju','ganesh']
  labour$ : Observable<string> = from(this.labour)

  constructor() { }

  ngOnInit(): void {

    this.agents = new Observable((observer)=>{
      try {
        observer.next('Ram');

        setTimeout(() => {
        observer.next('Sita');
        }, 3000);

        setTimeout(() => {
        observer.next('Gita');
        }, 6000);

      } catch (error) {
        observer.error(error)
      }
    });

    this.agents.subscribe((res)=>{
      this.agentName = res
      
    })


    this.student$.subscribe((res)=>{
      console.log(res);
      
    })


    this.studentObj$.subscribe((res)=>{
      console.log(res);
      
    })


    this.labour$.subscribe((res)=>{
      console.log(res);
      
    })
  }

}
