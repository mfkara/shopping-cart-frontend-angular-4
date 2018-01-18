import { Product } from './product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): any {

    filterText = filterText?filterText.toLocaleLowerCase():null;

    return filterText?value.filter((p: Product ) => p.productName.toLocaleLowerCase().indexOf(filterText) !== -1):value;
  }

}
