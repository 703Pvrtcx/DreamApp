import { Component, OnInit } from '@angular/core';

import { BackgroundMode } from '@ionic-native/background-mode/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  //  this.backgroundMode.enable();
  }

}

