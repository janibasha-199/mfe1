import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent implements OnInit {

  name: string = "";

  constructor(public store: Store) {
  }

  ngOnInit(): void {
    // window.addEventListener('eventFromMfe', (e: Event) => {
    //   const detail = (e as CustomEvent).detail;
    //   this.name = !detail ? "" : detail.name;
    // });


    // this.store.select(state => state).pipe(take(1)).subscribe((test: any) => {
    //   this.name = test.sampleState.name;
    // })
  }

  get cartState() {
    return this.store.select((state: any) => state?.sampleState);
  }

}
