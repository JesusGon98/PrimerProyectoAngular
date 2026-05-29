import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-toggle-option',
  imports: [MatSlideToggleModule, MatDividerModule],
  templateUrl: './toggle-option.component.html',
  styleUrl: './toggle-option.component.scss',
})
export class ToggleOptionComponent {
  @Input() label: string = '';
  @Input() description: string = '';
  @Input() checked: boolean = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  public onToggle(value: boolean) {
    this.checkedChange.emit(value);
  }
}
