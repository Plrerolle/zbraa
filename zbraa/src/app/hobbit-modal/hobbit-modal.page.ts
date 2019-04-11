import { Component, OnInit } from '@angular/core';
import { Platform, NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hobbit-modal',
  templateUrl: './hobbit-modal.page.html',
  styleUrls: ['./hobbit-modal.page.scss'],
})
export class HobbitModalPage implements OnInit {
  character;

  constructor(
    public platform: Platform,
    public nav: NavParams,
    public modalCtrl: ModalController
  ) {
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/imgs/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/imgs/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/imgs/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.nav.get('charNum')];
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }
}