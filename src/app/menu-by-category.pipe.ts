import { Pipe, PipeTransform } from '@angular/core';
import { Menu } from './menu';

@Pipe({
  name: 'menuByCategory'
})
export class MenuByCategoryPipe implements PipeTransform {

  transform(value: Menu[], category: string): Menu[] {
    console.log(value.filter(i => i.category === category));
    return value.filter(i => i.category === category);
  }
}
