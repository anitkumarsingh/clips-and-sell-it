import { Component, contentChildren, AfterContentInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-container',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tab-container.component.html',
  styleUrl: './tab-container.component.css',
})
export class TabContainerComponent implements AfterContentInit {
  tabs = contentChildren(TabComponent);
  ngAfterContentInit() {
    const activeTab = this.tabs().find((tab) => tab.active());
    if (!activeTab) {
      this.setActiveTab(this.tabs()[0]);
    }
  }
  setActiveTab(tab: TabComponent) {
    this.tabs()?.forEach((tab) => tab.active.set(false));
    tab.active.set(true);
    return false;
  }
}
