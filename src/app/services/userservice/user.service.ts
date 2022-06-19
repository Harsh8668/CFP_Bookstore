import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any

  constructor(private httpService: HttpService) {
  }

  registration(reqData: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('/registration', reqData, false, header)
  }

  login(reqData: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('/login', reqData, false, header)
  }

  
}