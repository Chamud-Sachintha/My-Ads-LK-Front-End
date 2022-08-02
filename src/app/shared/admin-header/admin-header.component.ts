import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  userName!: any;
  constructor(private route: Router) { }

  ngOnInit(): void {
    // "use strict";

    // var fullHeight = function () {

    //   $('.js-fullheight').css('height', $(window).height());
    //   $(window).resize(function () {
    //     $('.js-fullheight').css('height', $(window).height());
    //   });

    // };
    // fullHeight();

    // $('#sidebarCollapse').on('click', function () {
    //   $('#sidebar').toggleClass('active');
    // });

    this.userName = sessionStorage.getItem("user") ? sessionStorage.getItem("user") : "";
  }

  logout() {
    sessionStorage.removeItem("user");
    this.route.navigate(['/auth/sign-in']);
  }

  goToHomePage() {
    this.route.navigate(['/']);
  }

}
