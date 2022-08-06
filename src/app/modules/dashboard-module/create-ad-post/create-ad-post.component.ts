import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-ad-post',
  templateUrl: './create-ad-post.component.html',
  styleUrls: ['./create-ad-post.component.css']
})
export class CreateAdPostComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  ngOnInit(): void {
  
  }
}
