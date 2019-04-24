import { Component } from '@angular/core';
import { FriendModalPage } from '../friend-modal/friend-modal.page'
import { HobbitsesService } from '../services/hobbitses.service';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  results: null;
  constructor(
    private modalCtrl: ModalController,
    private hobbitses: HobbitsesService) {
    this.displayContent();
  }

  async openModal(friend) {
    const modal = await this.modalCtrl.create({
      component: FriendModalPage,
      componentProps: friend
    });
    return await modal.present();
  }

  displayContent() {
    this.hobbitses.getHome().subscribe(data => {
      this.results = data
    });
  }
}
