import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
//Component is decorator(A design patter),i.e they are all functions/methods with some meta data holdings
export class AppComponent  {

  constructor(private http: HttpClient){

  }
  title="FDS-GRID";
  
  rowData: any=[];
    
    columnDefs = [
        {headerName: 'Name', field: 'name', sortable: true },
        {headerName: 'ID', field: 'id', sortable: true },
        {headerName: 'Department', field: 'dept', sortable: true },

      ];

        // { make: 'Toyota', model: 'Celica', price: 35000 },
        // { make: 'Ford', model: 'Mondeo', price: 32000 },
        // { make: 'Porsche', model: 'Boxter', price: 72000 }
        ngOnInit() {
          this.rowData = this.http.get('https://api.myjson.com/bins/668dg');
      }
    

}