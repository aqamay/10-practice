import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'exercise2'
})
export class Exercise2Pipe implements PipeTransform {
  // @ts-ignore
  jsonxml = require('jsontoxml');

  transform(value: any): any {
    return '<?xml version="1.0" encoding="UTF-8"?>' + '<root>' + this.jsonxml(value) + '</root>';
  }

}
