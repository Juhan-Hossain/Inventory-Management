import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  updateMode = false;
  id = 0;
  name = '';
  description = '';
  searchCategory = "";
  public container: Category[] = [];
  public tempContainer: Category[] = [];
  constructor(private categoryService: CategoryService) {
    this.render();
  }

  render() {
    this.categoryService.getAll().subscribe(
      (res) => {
        this.container = res;
        this.tempContainer = this.container.slice();
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
    this.description = this.container[index].description;
    this.updateMode = true;

    console.log(this.container[index]);
  }


  onDelete(id: number) {
    this.categoryService.delete(id).subscribe(
      (res) => {
        this.container = res;
        this.tempContainer = this.container.slice();
      },
      (error: Error) => {
        console.log(error.message);
      }
    );
  }

  onSearch() {
    this.tempContainer = this.container.filter(e =>
      e.name.toLowerCase().includes(this.searchCategory.toLowerCase())
      );
  }



  onSubmit() {
    // console.log(this.updateMode);
    let category = new Category(this.id, this.name, this.description);
    // console.log(category);
    if (this.updateMode) {
      this.categoryService.update(category).subscribe(
        (res) => {
          this.tempContainer = res;
        },
        (error: Error) => {
          console.log(error.message);
        }
      );
      this.updateMode = false;
    } else {
      this.categoryService.add(category).subscribe(
        (res) => {
          this.tempContainer = res;
        },
        (error: Error) => {
          console.log(error.message);
        }
      );
    }
    this.name = '';
    this.description = '';
    this.id = 0;

    this.render();
  }
}
