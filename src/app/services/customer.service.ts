import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { RepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends RepositoryService {

  constructor(http: HttpClient) {
    super(http);
    this.endpoint = "customer";
    this.url += this.endpoint;
  }
}

