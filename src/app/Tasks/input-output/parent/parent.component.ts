import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
})
export class ParentComponent implements OnInit {
  private _valueFromParentToChild: string;

  get valueFromParentToChild() {
    return this._valueFromParentToChild;
  }
  set valueFromParentToChild(value) {
    this._valueFromParentToChild = value;
  }
  constructor() {
    this._valueFromParentToChild = 'Wajdi';
  }

  ngOnInit() {}
}
