import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { RepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends RepositoryService{


  constructor(http: HttpClient ) {
    //super shobar upore
    super(http);
    this.endpoint = "category";
    this.url += this.endpoint;
  }


}
