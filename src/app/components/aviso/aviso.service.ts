import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AvisoService{

    constructor(
        private toastController: ToastController,
    ){}

    async exibe(mensagem: string){
        let toast = await this.toastController.create({
          message: mensagem,
          duration: 2000,
          position: 'top'
        });
        toast.present();
      }

}