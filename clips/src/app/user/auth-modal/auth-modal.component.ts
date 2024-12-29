import { Component } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { TabContainerComponent } from '../../shared/tab-container/tab-container.component';
import { TabComponent } from '../../shared/tab/tab.component';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [ModalComponent, TabContainerComponent, TabComponent],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css',
})
export class AuthModalComponent {}
