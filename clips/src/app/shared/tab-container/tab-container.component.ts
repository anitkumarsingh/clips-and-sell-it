import { Component, contentChildren, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-container',
  standalone: true,
  imports: [],
  templateUrl: './tab-container.component.html',
  styleUrl: './tab-container.component.css',
})
export class TabContainerComponent implements AfterContentInit {
  tabs = contentChildren(TabComponent);
  ngAfterContentInit() {
    console.log('tabs', this.tabs());
  }
}
