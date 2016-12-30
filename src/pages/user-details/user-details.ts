
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubUsers } from '../../providers/github-users';
import { User } from '../../models/user';
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  login: string;
   user: User;
  constructor(public navCtrl: NavController, private navParams: NavParams,githubUsers: GithubUsers) {
    this.login = navParams.get('login');
    githubUsers.loadDetails(this.login).subscribe(user=>{this.user=user; console.log(user)})
  }
}
