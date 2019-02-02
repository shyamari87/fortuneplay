import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Fortunes, FortuneService } from './fortune.service';

@Component({
  selector: 'fortune',
  templateUrl: './fortune.component.html',
  providers: [FortuneService],
  styleUrls: ['./app.component.css'],
})

export class FortuneComponent {
  fortunes: Fortunes[];
  fortune: Fortunes[];
  len: number;
  lenrd: number;
  constructor(private FortuneService: FortuneService) {
  }

  showConfig() {
    this.FortuneService.getConfig()
      // clone the data object, using its known Config shape
      .subscribe(result => {
        this.fortunes = result as Fortunes[]
        this.len = this.fortunes.length
        this.lenrd = Math.floor(Math.random() * this.fortunes.length)
        this.fortune = this.fortunes[this.lenrd]['message']
      }, error => console.error(error));
  }

}
