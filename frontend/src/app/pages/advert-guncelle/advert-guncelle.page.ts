import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../../api.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { PostProvider } from '../../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-advert-guncelle',
  templateUrl: './advert-guncelle.page.html',
  styleUrls: ['./advert-guncelle.page.scss'],
})
export class AdvertGuncellePage implements OnInit {
  id: any;
  user_id: any;
  anggota: any;
  advert_title: any;
  advert_desc: any;
  location:any;
  price: any;
  deadline:any;
  workarea: any;
  invertImg: any;
  userId_FK: any;


  fileDirectory: null;
  selectedFile = null;

  constructor(
    public _apiservice: ApiService,
    public alertController: AlertController,
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    private storage: Storage,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((param:any) => {
      this.id = param.id;
      console.log(this.id);
      this.getAdvert(this.id);
    })
  }

  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
}


getAdvert(id){
  this._apiservice.getAdvert(id).subscribe((res:any) => {
    console.log("SUCCESSGET", res);
    let advertt = res[0];
          this.advert_title = advertt.advert_title;
          this.advert_title = advertt.advert_title;
          this.location = advertt.location;
          this.price = advertt.price;
          this.deadline = advertt.deadline;
          this.workarea = advertt.workarea;
          this.userId_FK = advertt.userId_FK;
          this.invertImg = advertt.invertImg;
          this.advert_desc = advertt.advert_desc;
  },(err:any) => {
    console.log("ERROR", err)
  })
}

deleteAdvert(id){
  this._apiservice.deleteAdvert(id).subscribe((res:any) => {
    console.log("SUCCESS");
    this.router.navigateByUrl('tabs/homepage')
    .then(() => {
      window.location.reload();
    });
  }, (err:any) => {
    console.log("ERROR")
  })

}

updateAdvert(){
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

  this._apiservice.advertGuncelle(this.id,data).subscribe((res:any) => {
    console.log("SUCCESS", res);

  },(err:any) => {
    console.log("ERROR", err)
  })


  this.router.navigateByUrl('tabs/homepage')
  .then(() => {
    window.location.reload();
  });



}

  ngOnInit() {
    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.user_id = this.anggota.user_id;
    });
  }

}
