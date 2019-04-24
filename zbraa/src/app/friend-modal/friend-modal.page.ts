import { Component, OnInit } from '@angular/core';
import { Platform, NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-friend-modal',
  templateUrl: './friend-modal.page.html',
  styleUrls: ['./friend-modal.page.scss'],
})
export class FriendModalPage implements OnInit {
  friend;

  constructor(
    public platform: Platform,
    public nav: NavParams,
    public modalCtrl: ModalController
  ) { 
    this.friend = this.nav.get('friend');
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
