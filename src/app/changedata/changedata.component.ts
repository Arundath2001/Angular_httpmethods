import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-changedata',
  templateUrl: './changedata.component.html',
  styleUrls: ['./changedata.component.scss']
})
export class ChangedataComponent {
  itemId!: number;
  changeData: any;
  status!: string;
  newdata: any;
  newform: FormGroup;
  constructor(private formBuilder: FormBuilder, private httpService: HttpService) {
    this.newform = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      userId: ['', Validators.required],
      completed: [false, Validators.required]
    });
  }
  getvalues() {
    if (this.itemId) {
      this.httpService.getdata(this.itemId).subscribe(
        (data: any) => {
          this.changeData = data;
          this.status = '';
          this.newform.setValue({
            id: this.changeData.id,
            title: this.changeData.title,
            userId: this.changeData.userId,
            completed: this.changeData.completed
          });
        },
        (        error: any) => {
          alert("Please enter a valid ID !!");
        }
      );
    }
  }

  putitem() {
    if (this.newform.valid) {
      const newData = this.newform.value;

      this.httpService.putitem(this.itemId, newData).subscribe(
        response => {
          this.status = 'Data updated successfully!';
          this.newdata = newData;
        },
        error => {
          this.status = 'Error updating data!';
        }
      );
    } else {
      this.status = 'Please Enter all Details!';
    }
  }
  patchitem() {
    if (this.newform.valid) {
      const partialData = this.newform.value;

      this.httpService.patchitem(this.itemId, partialData).subscribe(
        response => {
          this.status = 'Data patched successfully!';
          this.newdata = { ...this.changeData, ...partialData }; 
        },
        error => {
          this.status = 'Error patching data!';
        }
      );
    } else {
      this.status = 'Please Enter all Details!';
    }
  }
  deleteitem() {
    if (this.itemId) {
      this.httpService.deleteitem(this.itemId).subscribe(
        response => {
          this.status = 'Data deleted successfully!';
          this.changeData = null;
          this.newdata = null;
        },
        error => {
          this.status = 'Error deleting data!';
        }
      );
    }
  }
}
