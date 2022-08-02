import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myapp-start-page',
  templateUrl: './myapp-start-page.component.html',
  styleUrls: ['./myapp-start-page.component.css']
})
export class MyappStartPageComponent implements OnInit {

  userName!: any;
  constructor() { }

  ngOnInit(): void {
    this.userName = sessionStorage.getItem("user");
  }

}
