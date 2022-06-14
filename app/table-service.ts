import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TableService {
  
  constructor(private http: HttpClient) { 
   
  }

  public getData(){
    return this.http.get<any[]>('https://mocki.io/v1/9d6299ef-d785-4ab1-8dca-62975f946a60');
  } 

  public getInnerData(id:number){
    if(id==1){
      return this.http.get<any[]>('https://mocki.io/v1/57b17265-2629-4ca9-ac1f-d20d59544343');
    }
  
    else if(id==2){
      return this.http.get<any[]>('https://mocki.io/v1/cefead77-b413-43c9-9ba8-d917a0e56a7b');
    }
  
    else if(id==3){
      return this.http.get<any[]>('https://mocki.io/v1/58d39891-cae2-4818-838f-162426030132');
    }
  }

}
