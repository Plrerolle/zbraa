import { Component } from '@angular/core';
import {UserCreateService} from '../services/user-create.service'

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.page.html',
  styleUrls: ['./add-friend.page.scss'],
})
export class AddFriendPage {
  results: null;
  zbravatarResults: null;
  userData =  {};

  constructor(
    private createService: UserCreateService
  ) { }

  createUser() {
    console.log(this.userData);
    this.createService.createUser(this.userData).subscribe(data => {
      this.results = data
    });
    this.createService.createZbravatar({id: this.results.id, zbra_path: '/home/plrerolle/zbraa/zbraa/src/assets/imgs/'}).subscribe(data => {
      this.zbravatarResults = data
    });
    console.log(this.zbravatarResults);

  }

}
