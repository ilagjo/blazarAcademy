import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter-app';
  
  showHistory: boolean = false;
  historyList: number[] = [];
  historyLabels: string[] = [];

  
  closeHistory() {
    this.showHistory = false;
  }

  toggleTable() {
    this.showHistory = !this.showHistory;
  }

  onCounterReset(lastCount: number) {
    this.showHistory = true;
    this.historyList.push(lastCount);
  }
}
