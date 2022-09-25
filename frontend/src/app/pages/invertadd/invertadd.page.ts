import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../../api.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { PostProvider } from '../../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-invertadd',
  templateUrl: './invertadd.page.html',
  styleUrls: ['./invertadd.page.scss'],
})
export class InvertaddPage implements OnInit {

  user_id: number;
  anggota: any;
  advert_title: string = "";
  advert_desc: string = "";
  location: string = "";
  price: string = "";
  deadline: string = "";
  workarea: string = "";
  userId_FK: string = "";
  invertImg: string = "";

  fileDirectory: string = "";
  selectedFile = null;

  minDate: string = new Date().toISOString();
  maxData : any = (new Date()).getFullYear() + 3;

  constructor(
    public _apiservice: ApiService,
    public alertController: AlertController,
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    private storage: Storage,
    private http: HttpClient,

  ) { }


  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0]
}

  ngOnInit() {
    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.user_id = this.anggota.user_id;
    });
  }



  invertAdd(){
    let data = {
      advert_title: this.advert_title,
      advert_desc: this.advert_desc,
      location: this.location,
      price: this.price,
      deadline: this.deadline,
      workarea: this.workarea,
      userId_FK: this.anggota.user_id,
      invertImg: this.selectedFile.name,
    }

    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost/serverapi1/uploads.php', uploadData).subscribe(res => {
    console.log(res);
    });

    this._apiservice.invertAdd(data).subscribe((res:any) => {
      console.log("SUCCESS ===", res);
      this.advert_title = '';
      this.advert_desc = '';
      this.location = '';
      this.price = '';
      this.deadline = '';
      this.workarea = '';
      this.invertImg = '';
      alert("eklendi");
    },(error: any) => {
      console.log("ERROR ===", error);
    })

    this.router.navigateByUrl('tabs/homepage')
    .then(() => {
      window.location.reload();
    });

  }

}
