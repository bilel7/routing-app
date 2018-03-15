import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  cats: string[] = ['cat 1', 'cat 2 ', 'cat 3', 'cat 4 '];

  constructor() { }

  ngOnInit() {
  }

}
