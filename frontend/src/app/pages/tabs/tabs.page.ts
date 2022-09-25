import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  user_id: any;
  anggota: any;
  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    private storage: Storage,
    public _apiservice: ApiService
  ) { }


  ngOnInit() {

      this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.user_id = this.anggota.user_id;

    });

  }

}
