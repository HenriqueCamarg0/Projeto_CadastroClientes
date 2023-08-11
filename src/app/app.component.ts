import { Component, AfterViewInit } from '@angular/core';

import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pojeto-cliente';

  ngAfterViewInit() {
    const path = window.location.href;
    const navLinks = document.querySelectorAll("#layoutSidenav_nav .sb-sidenav a.nav-link");
    navLinks.forEach((link) => {
      if (link.getAttribute('href') === path) {
        link.classList.add("active");
      }
    });
  
    const sidebarToggle = document.getElementById("sidebarToggle");
    if (sidebarToggle) {
      sidebarToggle.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.toggle("sb-sidenav-toggled");
      });
    }
  }
}