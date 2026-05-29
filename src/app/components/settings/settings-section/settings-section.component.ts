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
  //definimos las propiedades de entrada para recibir el titulo e icono de la seccion desde el componente padre
  @Input() title: string = '';
  @Input() icon: string = 'settings';

  //definimos el evento de salida para emitir la accion de guardar al componente padre
  @Output() saved = new EventEmitter<void>();
  //creamos el metodo que sera llamado cuando el usuario haga clic en el boton de guardar para emitir la accion de guardar al componente padre y mostrar un mensaje de confirmacion
  public onSave() {
    this.saved.emit();
  }
}
