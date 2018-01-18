import { Category } from './category';
import { CategoryService } from './category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  categories: Category[];
  selectedCategory: Category;
  ngOnInit() {
    this.getCategories();
  }

  getCategories(){

    this.categoryService.getCategories().subscribe(c => this.categories = c );
  }

  onSelect( category?: Category ){

    if(category){
      this.selectedCategory = category;
    }
    else{
      this.selectedCategory = null;
    }

  }

}
