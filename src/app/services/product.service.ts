import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { RepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends RepositoryService {
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = "product";
    this.url += this.endpoint;
  }

}
