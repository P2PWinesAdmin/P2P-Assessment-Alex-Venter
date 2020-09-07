import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  private searchWrapperWidth: string;
  constructor() { }

  ngOnInit(): void {
    function searchWrapperWidth() {
      var elmnt = document.getElementById(".search-wrapper");
      var txt = "Height including padding and border: " + elmnt.offsetHeight + "px<br>";
      txt += "Width including padding and border: " + elmnt.offsetWidth + "px";
      document.getElementById("demo").innerHTML = txt;
    } 
  }
}
