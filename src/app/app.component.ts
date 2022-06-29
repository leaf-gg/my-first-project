import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  {{ value }}
  <button (click)="add()">Adicionar</button>
  <router-outlet></router-outlet>`
})

export class AppComponent implements OnInit,  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  public value: number = 1;
  constructor() { }

public add(){
  return this.value += 1;
}
  ngOnInit(): void {
  }

  // Isso aqui roda qdo todas as props são verificadas
  ngDoCheck(): void {  console.log('ngDoCheck running')}

  // Propriedades do componentes
  ngAfterContentInit(): void {  console.log('ngAfterContentInit running')}
  ngAfterViewChecked(): void {  console.log('ngAfterViewChecked running')}
  ngAfterViewInit(): void { console.log('ngAfterViewInit running')}
  ngAfterContentChecked(): void {  console.log('ngAfterContentChecked running')}

}
