import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  model = inject(ModalService);
  toggleModal($event: Event) {
    console.log('Toggle modal', $event);
    $event.preventDefault();
    this.model.toggle('auth');
  }
}
