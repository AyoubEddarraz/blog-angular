import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortArticle'
})
export class ShortArticlePipe implements PipeTransform {

  transform(value: string, limit?: number): string | null {

    if(!value) return null;

    limit = limit ? limit : 30;

    return `${value.substr(0 , limit)}...`;

  }

}
