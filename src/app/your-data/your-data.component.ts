import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-your-data',
  templateUrl: './your-data.component.html',
  styleUrls: ['./your-data.component.css']
})
export class YourDataComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
  }

}
