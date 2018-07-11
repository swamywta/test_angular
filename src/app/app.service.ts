import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs';
import { map } from "rxjs/operators";
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Http, Response, Headers, HttpModule, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private base_uri : any = 'http://localhost:3000';
  constructor(private http: Http, private httpClient: HttpClient) {

   }
  get_clients(): Observable<any> {
    return this.http.get('http://localhost:3000/clients/get_clients')
      .pipe(map((res:Response) => res.json()));
  }
  create_client(data): Observable<any> {
    return this.http.post('http://localhost:3000/clients/create_client', data)
      .pipe(map((res:Response) => res.json()));
  }
}
