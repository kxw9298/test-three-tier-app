import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>('demo/all');
}
}
