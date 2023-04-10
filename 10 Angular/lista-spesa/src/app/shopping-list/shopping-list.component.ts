import { Component } from '@angular/core';

interface ShoppingListItem {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  items: ShoppingListItem[] = [
    { text: 'Latte', completed: false },
    { text: 'Pane', completed: false },
    { text: 'Burro', completed: false }
  ];
  today: string = new Date().toLocaleDateString();

  addItem(newItem: string): void {
    if (!newItem) { return; }
    const item: ShoppingListItem = { text: newItem, completed: false };
    this.items.push(item);
  }

  archiveCompletedItems(): void {
    this.items = [];
    this.clearInput();
  }

  clearInput(): void {
    this.inputValue = '';
  }

  completeItem(item: ShoppingListItem): void {
    item.completed = !item.completed;
  }

  inputKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.addItem(this.inputValue);
      this.clearInput();
    }
  }

  autofill(): void {
    const fillItems = ['Uova', 'Formaggio', 'Pomodori', 'Cipolle', 'Insalata', 'Succo d\'arancia'];
    fillItems.forEach(item => this.addItem(item));
    this.clearInput();
  }

  inputValue = '';
}
