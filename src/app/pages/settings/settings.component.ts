import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
//Importamos los componentes de la sección de configuración para poder ser utilizados de manera correcta
import { SettingsSectionComponent } from '../../components/settings/settings-section/settings-section.component';
import { ToggleOptionComponent } from '../../components/settings/toggle-option/toggle-option.component';
import { UserCardComponent } from '../../components/settings/user-card/user-card.component';

@Component({
  selector: 'app-settings',
  imports: [SettingsSectionComponent, ToggleOptionComponent, MatSnackBarModule, UserCardComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  //creamos los objetos hardcoreados donde guardaremos las informacion sobre las preferencias de la notificacion
  //y la informacion del usuario, para luego ser mostrada en la interfaz de usuario y poder ser editada
  public notifications = {
    email: true,
    push: false,
    weekly: true,
  };
  public user = {
  name: 'Jesus Gonzalez',
  email: 'jesus.gonzalez.199817@gmail.com',
  };

  constructor(private snackBar: MatSnackBar) {}

  //creamos los metodos que seran llamados desde los componentes hijos para actualizar la informacion del usuario y las preferencias de notificacion
  public onProfileSaved(profile: { name: string; email: string }) {
  this.user = profile;
  this.snackBar.open('Perfil actualizado', 'OK', { duration: 3000 });
  }
  public onNotificationsSaved() {
    this.snackBar.open('Preferencias guardadas', 'OK', { duration: 3000 });
  }
  //creamos el metodo que sera llamado desde el componente de toggle-option para actualizar las preferencias de notificacion cada vez que el usuario cambie una opcion
  public onToggleChange(key: keyof typeof this.notifications, value: boolean) {
  this.notifications[key] = value;
  console.log(`Notificación "${key}" cambiada a:`, value);
  console.log('Estado actual de notificaciones:', this.notifications);
}

}
