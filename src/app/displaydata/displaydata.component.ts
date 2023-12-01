import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.scss']
})
export class DisplaydataComponent implements OnInit {
  items!: any[];
  selectitem: any;
  value1!: number;
  constructor(private listdata: HttpService) { }
  ngOnInit(): void {
  }
  generateall(): void {
    this.listdata.displayall()
      .subscribe(
        (data: any[]) => {
          this.items = data;
        },
        (error: any) => {
          console.error('Error fetching todos:', error);
        }
      );
  }
  getbyid(): void {
    if (this.value1) {
      this.listdata.getdata(this.value1)
        .subscribe(
          (data: any) => {
            this.selectitem = data;
          },
          (error: any) => {
            console.error('Error fetching todo by ID:', error);
          }
        );
    } else {
      alert('Please enter a valid ID!!');
    }
  }
}
