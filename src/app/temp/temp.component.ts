import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent implements OnInit {

  name: string = "";

  constructor() {
  }

  ngOnInit(): void {
    window.addEventListener('eventFromMfe', (e: Event) => {
      const detail = (e as CustomEvent).detail;
      this.name = !detail ? "" : detail.name;
  })
  }

}
