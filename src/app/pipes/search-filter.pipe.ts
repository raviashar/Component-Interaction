import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: true
})

export class SearchFilterPipe implements PipeTransform {

  transform(abc: any, radioData: string, searchData: string): any {
    if (!abc || (!radioData && !searchData)) {
      return abc;
    }
    console.log(abc);

  
    if (radioData && searchData) {
      return abc.filter(x => x.designation.toLowerCase().indexOf(radioData.toLowerCase()) !== -1 && x.name.toLowerCase().indexOf(searchData.toLowerCase()) !== -1);
    }
    else if (radioData) {
      return abc.filter(x => x.designation.toLowerCase().indexOf(radioData.toLowerCase()) !== -1);
    }
    else {
      return abc.filter(x => x.name.toLowerCase().indexOf(searchData.toLowerCase()) !== -1);
    }
  }
}

