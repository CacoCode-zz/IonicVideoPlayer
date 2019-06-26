import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private screenOrientation: ScreenOrientation;
  isLANDSCAPE = false;
  constructor(public navCtrl: NavController, screenOrientation: ScreenOrientation) {
    this.screenOrientation = screenOrientation
  }

  aaa()
  {
    if(this.isLANDSCAPE)
    {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.isLANDSCAPE = false
    }else{
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      this.isLANDSCAPE = true
    }
    
  }
}
