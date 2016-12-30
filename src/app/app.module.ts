import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationPage } from '../pages/organisation/organisation';
import { GithubUsers } from '../providers/github-users';
import { UserDetailsPage } from '../pages/user-details/user-details';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    UsersPage,
    ReposPage,
    OrganisationPage,
    UserDetailsPage
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    UsersPage,
    ReposPage,
    OrganisationPage,
    UserDetailsPage
  ],
  providers: [GithubUsers]
})
export class AppModule {}
