import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostProvider } from '../../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-myinvert',
  templateUrl: './myinvert.page.html',
  styleUrls: ['./myinvert.page.scss'],
})
export class MyinvertPage implements OnInit {
  id: string = "";
  user_id: number;
  anggota: any;

  advert_title:string = "";
  advert_desc:string = "";
  location:string = "";
  price: string = "";
  deadline: string = "";
  workarea:string = "";
  userId_FK: string = "";
  invertImg: string = "";
  minDate: string = new Date().toISOString();

  adverts: any = [];


  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    private storage: Storage,
    public _apiservice: ApiService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe((param:any) => {
      this.user_id = param.user_id;
      console.log(this.user_id);
      this.getMyAdverts(this.user_id);
    })
  }

  ngOnInit() {
    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.user_id = this.anggota.user_id;

    });
  }


  getMyAdverts(user_id){
    this._apiservice.getMyAdverts(user_id).subscribe((res:any) => {
      console.log("SUCCESSGET", res);
      this.adverts = res;

    },(err:any) => {
      console.log("ERROR", err)
    })
  }

  deleteAdvert(id){
    this._apiservice.deleteAdvert(id).subscribe((res:any) => {
      console.log("SUCCESS");
      window.location.reload();
    }, (err:any) => {
      console.log("ERROR")
    })


  }




}
