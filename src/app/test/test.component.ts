import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public themeMode: any = 'light';
  private body: any = document.getElementsByTagName('body')[0];
  constructor() { }

  ngOnInit() { 
    // this.body = document.getElementsByTagName('body')[0]; 
    this.body.classList.add(this.themeMode); 
  }

  toggle(){
    if(this.themeMode == 'light'){
      this.themeMode = 'dark';
    }
    else{
      this.themeMode = 'light';
    }
    this.body = document.getElementsByTagName('body')[0];
    this.body.classList.remove("dark");
    this.body.classList.remove("light");
    this.body.classList.add(this.themeMode);

  }
}
