import {
  Component,
  inject,
  input,
  ElementRef,
  viewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements AfterViewInit, OnDestroy {
  modal = inject(ModalService);
  id = input.required<string>();
  dialog = viewChild.required<ElementRef<HTMLDialogElement>>('baseDialog');

  constructor() {}
  ngAfterViewInit() {
    this.modal.register(this.id(), this.dialog().nativeElement);
  }
  closeModal($event: Event) {
    console.log(`closeModal`);
    $event.preventDefault();
    this.modal.toggle(this.id());
  }
  ngOnDestroy() {
    this.modal.unregistermModal(this.id());
  }
}
