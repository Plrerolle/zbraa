import { Component} from '@angular/core';
import { HobbitModalPage } from '../hobbit-modal/hobbit-modal.page';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-hobbitses',
  templateUrl: './hobbitses.page.html',
  styleUrls: ['./hobbitses.page.scss'],
})
export class HobbitsesPage {
  public items: Array<{ title: string; charNum: number}> = [];
  constructor(
    private modalCtrl: ModalController, 
    private alertCtrl: AlertController) {
      this.items.push({
        title: 'Gollum',
        charNum: 0
      });
      this.items.push({
        title: 'Frodo Baggins',
        charNum: 1
      });
      this.items.push({
        title: 'Sam',
        charNum: 2
      }); 

     }

  async openModal(characterNum)
  {
    const modal = await this.modalCtrl.create({
     component: HobbitModalPage,
     componentProps: characterNum
   });

   return await modal.present();
  }

}
