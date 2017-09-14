import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireAuth } from "angularfire2/auth";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fire: AngularFireAuth,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.username.value, this.password.value)
      .then(data =>{
        this.alert("Success! You're registered.");
      })
      .catch(error => {
        this.alert(error.message);
      });
    console.log(this.username.value, this.password.value);
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
