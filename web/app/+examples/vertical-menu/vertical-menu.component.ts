import {Component, ViewEncapsulation, OnInit} from '@angular/core';

@Component({
  selector: 'vertical-menu-example',
  template: require('./vertical-menu.component.html'),
  styles: [require('./vertical-menu.component.scss')],
  encapsulation: ViewEncapsulation.None
})

export class VerticalMenuComponent implements OnInit {
  options: Array<string>;
  qaTag: string = 'vertical-menu-example';
  
  constructor () {
  }

  ngOnInit (): void {
    this.options = ['VERTICAL_MENU.SERVICE', 'VERTICAL_MENU.NODES', 'VERTICAL_MENU.CASSANDRA'];
  }
}