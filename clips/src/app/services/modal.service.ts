import { Injectable, signal } from '@angular/core';

interface IModal {
  id: string;
  element: HTMLDialogElement;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modal = signal<IModal[]>([]);
  constructor() {}
  register(id: string, element: HTMLDialogElement) {
    this.modal.set([
      ...this.modal(),
      {
        id,
        element,
      },
    ]);
    console.log(this.modal());
  }
  toggle(id: string) {
    const modal = this.modal().find((item) => item.id === id);
    console.log(modal, id);
    if (!modal) return;
    if (modal.element.open) {
      modal.element.close();
    } else {
      modal.element.showModal();
    }
  }
}
