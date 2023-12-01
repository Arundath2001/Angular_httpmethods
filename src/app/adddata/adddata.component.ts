import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.scss']
})
export class AdddataComponent implements OnInit {
newform!: FormGroup;
status!: string;
newvalue: any;
constructor(private fb: FormBuilder, private listdata: HttpService) { }
ngOnInit(): void {
  this.newform = this.fb.group({
    id: ['', Validators.required],
    title: ['', Validators.required],
    userId: ['', Validators.required],
    completed: [true, Validators.required]
});
}
onSubmit(): void {
  if (this.newform.valid) {
    this.listdata.add(this.newform.value)
      .subscribe(
        (data: any) => {
          this.status = 'Form submitted successfully!';
          this.newvalue = data;
},);
  } else {
    alert("Please Fill All Details!!");
  }
}
}