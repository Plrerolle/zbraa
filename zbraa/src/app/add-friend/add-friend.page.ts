import { Component } from '@angular/core';
import { UserCreateService } from '../services/user-create.service'


@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.page.html',
  styleUrls: ['./add-friend.page.scss'],
})
export class AddFriendPage {
  results: null;
  zbravatarId: 0;
  zbravatarResults: null;
  userData = {};

  constructor(
    private createService: UserCreateService
  ) { }


  createUser() {
    console.log(this.userData);
    this.createService.createUser(this.userData).subscribe(data => {
      this.results = data;
      this.createService.createZbravatar({ id: data.id, zbra_path: '/home/plrerolle/zbraa/zbraa/src/assets/imgs/' })
        .subscribe(zbraData => {
          this.zbravatarResults = zbraData;
        });

    });

    console.log(this.zbravatarResults);

  }

}
