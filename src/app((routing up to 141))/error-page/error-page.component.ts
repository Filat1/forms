import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMassage: string;

  constructor(private activetedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activetedRoute.data.subscribe(
      (data: Data) => {
        this.errorMassage = data['myMessage'];
      }
    );
  }

}
