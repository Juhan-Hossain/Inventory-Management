import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  id = 0;
  updatemode = false;
  name = '';
  price = 0;
  categoryId = 0;
  public container: Product[] = [];
  constructor(private productService: ProductService) {
    this.render();
  }

  render() {
    this.productService.getAll().subscribe(
      (res) => {
        this.container = res;
      },
      (error: Error) => {
        console.log(error.message);
      }
    );
  }
  ngOnInit(): void {}
  onEdit(index: number) {
    this.id = this.container[index].id;
    this.name = this.container[index].name;
    this.price = this.container[index].price;

    this.categoryId = this.container[index].categoryId;
    this.updatemode = true;
  }

  onDelete(id: number) {
    this.productService.delete(id).subscribe(
      (res) => {
        this.container = res;
      },
      (error: Error) => {
        console.log(error.message);
      }
    );
    this.render();
  }
  onAdd() {}
  //implementing onsubmit()

  onSubmit() {
    // creating new Product;
    let product = new Product(
      this.id,
      this.name,
      this.price,
      this.categoryId
    );
    // console.log(category);
    if (this.updatemode) {
      this.productService.update(product).subscribe(
        (res) => {
          this.container = res;
        },
        (error: Error) => {
          console.log(error.message);
        }
      );
      this.updatemode = false;
    } else {
      this.productService.add(product).subscribe(
        (res) => {
          this.container = res;
        },
        (error: Error) => {
          console.log(error.message);
        }
      );
    }
    this.name = '';
    this.price = 0;
    this.id = 0;
    this.categoryId = 0;

    this.render();
  }
}
