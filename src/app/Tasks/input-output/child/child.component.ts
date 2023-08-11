import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit {
  private _childName: string;

  @Input('valueFromParentToChild') valueFromParentToChild: string;
  get childName(): string {
    return this._childName;
  }
  set childName(value: string) {
    this._childName = value;
  }
  @Output() public setValue = new EventEmitter();

  constructor() {
    this._childName = '';
    this.valueFromParentToChild = '';
  }

  ngOnInit() {
    setTimeout(() => {
      this.setValue.emit('Sabrine');
    }, 3000);
  }
}
