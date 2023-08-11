import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
})
export class MyChildComponent implements OnInit, OnChanges, DoCheck {
  // @Input() login: string;
  // @Output() messageFromChild = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  updateParent(value: string) {
  }

  ngDoCheck(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
