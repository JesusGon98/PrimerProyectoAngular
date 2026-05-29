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
  //definimos las propiedades de entrada para recibir el nombre y correo del usuario desde el componente padre
  @Input() userName: string = '';
  @Input() userEmail: string = '';
   //definimos el evento de salida para emitir los cambios realizados en el perfil del usuario al componente padre
  @Output() profileSaved = new EventEmitter<{ name: string; email: string }>();

  public editedName: string = '';
  public editedEmail: string = '';

  //inicializamos las propiedades editadas con los valores recibidos del componente padre para mostrar la informacion actual del usuario en los campos de texto
  ngOnInit() {
    this.editedName = this.userName;
    this.editedEmail = this.userEmail;
  }
 //creamos el metodo que sera llamado cuando el usuario haga clic en el boton de guardar para emitir los cambios realizados en el perfil del usuario al componente padre y mostrar un mensaje de confirmacion
  public onSave() {
    console.log('Perfil guardado:', { name: this.editedName, email: this.editedEmail });
    this.profileSaved.emit({ name: this.editedName, email: this.editedEmail });
  }
}
