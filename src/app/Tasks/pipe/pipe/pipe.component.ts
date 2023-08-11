import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements OnInit {
  pi = 3.14;
  e = 2.718281828459045;
  today = Date.now();

  constructor() {}

  ngOnInit() {}
}
