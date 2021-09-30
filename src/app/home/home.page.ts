import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async msgAlerta() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja favoritar o Filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.mensagemToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async mensagemToast() {
    const toast = await this.toastController.create({
      message: 'Você adicionou o filme aos Favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
