import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent {
  count: number = 0;
  showHistory: boolean = false;
  historyList: number[] = [];
  historyLabels: string[] = [];

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.showHistory = true;
    this.historyList.push(this.count);
    this.count = 0;
  }
  
  closeHistory() {
    this.showHistory = false;
  }

  updateLabel(index: number, label: string) {
    this.historyLabels[index] = label;
  }

  toggleTable()  {
    this.showHistory = !this.showHistory;
  }
}