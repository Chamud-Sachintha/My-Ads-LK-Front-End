import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-ad-post',
  templateUrl: './create-ad-post.component.html',
  styleUrls: ['./create-ad-post.component.css']
})
export class CreateAdPostComponent implements OnInit {

  uploadComp = 1;
  haveOffersOrNot!: string;
  visible = true;
  selectable = true;
  removable = true;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  Tags: string[] = [];
  uploadComps: Number[] = [];

  itemSurfaceList = ['Not Specified', 'Metal', 'Plastic', 'Iron', 'Aluminum', 'Hard Plastic']
  
  constructor(private _formBuilder: FormBuilder,private notify: ToastrService) { }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
    haveOffers: ['NF']
  });
  isLinear = false;

  ngOnInit(): void {

  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.Tags.push(value);
    }

    if (input) {
      input.value = '';
    }
  }

  remove(tag: string): void {
    const index = this.Tags.indexOf(tag);

    if (index >= 0) {
      this.Tags.splice(index, 1);
    }
  }

  setValue() {
    this.haveOffersOrNot = this.secondFormGroup.get("haveOffers")?.value;
  }

  addUploadComps() {

    if (this.uploadComp < 5) {
      this.uploadComps.push(this.uploadComp);
      this.uploadComp++;
    }else{
      this.notify.error('You Can Add Maximum 5 Photos of Each Item', 'Maximum File Upload Limit')
    }

  }

  removeUploadComp() {
    this.uploadComps.pop();
    this.uploadComp--;
  }
}
