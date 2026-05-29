import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../components/general/search-bar/search-bar.component';

@Component({
  selector: 'app-explore',
  imports: [
    CommonModule,
    SearchBarComponent
  ],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss',
})
export class ExploreComponent {
  public test(searchTerm: string) {
    console.log(searchTerm);
  }
}
