import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('myForm') f: NgForm;
  subscriptions: string[] = ["Basic", "Advanced", "Pro"];
  viewLastData: boolean = false;
  lastData: {email: string, subsription: string, password: string};

  constructor(){}

  ngAfterViewInit(): void {
    console.log(this.f)
  }

  onSubmit(){
    console.log(this.f.value);
    this.lastData = this.f.value as {email: string, subsription: string, password: string};
    this.viewLastData = true;
  }

}
