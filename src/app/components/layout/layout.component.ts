import { Component, OnInit } from '@angular/core';
import { SidebarControllerService } from '../../services/sidebar-controller.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public sideState = true;
  constructor(public _sdieController: SidebarControllerService) {
    this._sdieController.ToggleSidebar.subscribe((e) => {
      if (e === 'hidden') {
        this.sideState = false;
        return;
      } else if ( e === 'show') {
        this.sideState = true;
        return;
      }
      this.sideState = (this.sideState) ? false : true;
    });
  }

  ngOnInit() {
  }

}
