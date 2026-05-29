import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-user-card',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() userName: string = '';
  @Input() userEmail: string = '';

  @Output() profileSaved = new EventEmitter<{ name: string; email: string }>();

  public editedName: string = '';
  public editedEmail: string = '';

  ngOnInit() {
    this.editedName = this.userName;
    this.editedEmail = this.userEmail;
  }

  public onSave() {
    console.log('Perfil guardado:', { name: this.editedName, email: this.editedEmail });
    this.profileSaved.emit({ name: this.editedName, email: this.editedEmail });
  }
}
