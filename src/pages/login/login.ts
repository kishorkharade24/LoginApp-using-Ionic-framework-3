import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireAuth } from "angularfire2/auth";
import {LoggedinPage} from "../loggedin/loggedin";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') userName;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fire: AngularFireAuth,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.userName.value, this.password.value)
      .then(data => {
        this.alert('Success! You\'re logged in.');
        this.navCtrl.setRoot(LoggedinPage);
      })
      .catch(error => {
        this.alert(error.message);
      });
  }

  alert(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}
