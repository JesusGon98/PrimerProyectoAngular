import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-settings-section',
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './settings-section.component.html',
  styleUrl: './settings-section.component.scss',
})
export class SettingsSectionComponent {
  @Input() title: string = '';
  @Input() icon: string = 'settings';

  @Output() saved = new EventEmitter<void>();

  public onSave() {
    this.saved.emit();
  }
}
