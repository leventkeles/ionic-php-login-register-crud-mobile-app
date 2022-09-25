import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiService } from '../../api.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  username: string;
  anggota: any;
  password: string;
  user_id: number;
  adverts: any = [];
  minDate: string = new Date().toISOString();

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    private storage: Storage,
    public _apiservice: ApiService
  ) {
    this.getAdverts();
   }

   custom = {
    centeredSlides: false,
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 3,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
  }

  ionViewWillEnter(){

    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.user_id = this.anggota.user_id;
      this.username = this.anggota.username;
      this.password = this.anggota.password;
    });
  }

  async Logout() {
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toastCtrl.create({
      message: 'Logout Successful',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {


  }

  getAdverts(){
    this._apiservice.getAdverts().subscribe((res:any) => {
      console.log("SUCCESS ===", res);
      this.adverts =res;
    },(error: any) => {
      console.log("ERROR ===", error);
    })
  }

}
