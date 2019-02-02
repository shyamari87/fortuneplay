import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Fortunes {
  message: string
  id: string
}

@Injectable()
export class FortuneService {
  constructor(private http: HttpClient) { }
  configUrl = 'http://dojodevopschallenge.s3-website-eu-west-1.amazonaws.com/fortune_of_the_day.json';
    
  getConfig() {
        return this.http.get(this.configUrl);
     }
 }
