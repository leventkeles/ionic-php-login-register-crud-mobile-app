import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  username: string;
  anggota: any;
  password: string;
  id: number;
  user_id:number;

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    private storage: Storage,
    public menuCtrl: MenuController
  ) { }



  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.id = this.anggota.id;
      this.username = this.anggota.username;
      this.password = this.anggota.password;
      this.user_id = this.anggota.user_id;
    });
  }

  async Logout() {
    this.menuCtrl.close();
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toastCtrl.create({
      message: 'Logout Successful',
      duration: 2000
    });
    toast.present();
  }
}
