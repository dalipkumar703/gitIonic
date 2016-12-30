import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users';
import { UserDetailsPage } from '../../pages/user-details/user-details';
/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

    users: User[];
    originalUsers: User[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) {
       githubUsers.load().subscribe(users=>{
           this.users = users;
           this.originalUsers=users;
       });
      
  }

 goTodetails(login : string )
    {
        this.navCtrl.push(UserDetailsPage , {login :login});
    
    }
    search(searchEvent) {
    let term = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.users = this.originalUsers;
    } else {
      // Get the searched users from github
      this.githubUsers.searchUsers(term).subscribe(users => {
        this.users = users
      });
    }
  }
}
