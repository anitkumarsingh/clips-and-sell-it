import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './core/nav/nav.component';
import { AuthModalComponent } from './user/auth-modal/auth-modal.component';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, AuthModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'clips';
  showModal = signal(true);
  modal = inject(ModalService);

  // ngOnInit() {
  //   setInterval(() => {
  //     this.showModal.set(!this.showModal());
  //   }, 1000);
  // }
}
