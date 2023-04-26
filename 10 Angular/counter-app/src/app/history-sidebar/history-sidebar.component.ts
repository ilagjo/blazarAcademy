import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-history-sidebar',
  templateUrl: './history-sidebar.component.html',
  styleUrls: ['./history-sidebar.component.css']
})
export class HistorySidebarComponent {
  @Input() historyList: number[] = [];
  @Input() historyLabels: string[] = []
  @Output() close = new EventEmitter()

  updateLabel(index: number, label: string) {
    this.historyLabels[index] = label;
  }

}
