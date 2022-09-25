import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PostProvider } from '../../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private http: HttpClient,
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    private storage: Storage,
    public menuCtrl: MenuController

    ) { }

  username: string;
  anggota: any;
  id: number;
  user_id:number;
  fullname: string;
  profile_desc: string;
  user_phone: string;
  user_mail: string;

  // image: any;
  // fileDirectory: null;
  // selectedFile = null;

  // selectedFile(event){
  //   this.image = event.target.files[0];
  // }

  // onClick(){
  //   const formData = new FormData();
  //   formData.append('image', this.image);
  //   this.http.post('http://localhost/serverapi1/uploads.php', formData).subscribe((response: any) => {
  //     console.log(response);
  //   });
  // }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.id = this.anggota.id;
      this.username = this.anggota.username;
      this.fullname = this.anggota.fullname;
      this.user_id = this.anggota.user_id;
      this.profile_desc = this.anggota.profile_desc;
      this.user_phone = this.anggota.user_phone;
      this.user_mail = this.anggota.user_mail;
    });
  }



//   onFileChanged(event) {
//     this.selectedFile = <File>event.target.files[0]
// }

//   onUpload() {

//   const uploadData = new FormData();
//   uploadData.append('file', this.selectedFile, this.selectedFile.name);
//   this.http.post('http://localhost/serverapi1/uploads.php', uploadData).subscribe(res => {
//     console.log(res);
//   });
// }

}
