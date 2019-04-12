import { Component} from '@angular/core';
import { HobbitModalPage } from '../hobbit-modal/hobbit-modal.page';
import { ModalController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { HobbitsesService } from '../services/hobbitses.service';


@Component({
  selector: 'app-hobbitses',
  templateUrl: './hobbitses.page.html',
  styleUrls: ['./hobbitses.page.scss'],
})
export class HobbitsesPage {
  public items: Array<{ title: string; charNum: number}> = [];
  results: null;
  constructor(
    private modalCtrl: ModalController, 
    private hobbitses: HobbitsesService) {
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
    console.log('Entry: ', characterNum);
    const modal = await this.modalCtrl.create({
     component: HobbitModalPage,
     componentProps: characterNum
   });

   return await modal.present();
  }

  displayContent() {
    this.hobbitses.getHome().subscribe(data => {this.results = data});
  }

}
