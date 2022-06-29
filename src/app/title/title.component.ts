import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() public title: string = "Welcome";
  constructor() { }

  // basicamente um document.ready
  ngOnInit(): void {
    setTimeout(()=>{
      console.log(1);
  }, 5000)
}
  ngOnChanges(): void {
    alert('changed with success' )
  }

}
