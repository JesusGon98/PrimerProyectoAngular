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
  //definimos las propiedades de entrada para recibir la etiqueta, descripcion y estado del toggle desde el componente padre
  @Input() label: string = '';
  @Input() description: string = '';
  @Input() checked: boolean = false;

  //definimos el evento de salida para emitir los cambios realizados en el estado del toggle al componente padre
  @Output() checkedChange = new EventEmitter<boolean>();
  //creamos el metodo que sera llamado cuando el usuario cambie el estado del toggle para emitir el nuevo valor al componente padre y mostrar un mensaje de confirmacion
  public onToggle(value: boolean) {
    this.checkedChange.emit(value);
  }
}
