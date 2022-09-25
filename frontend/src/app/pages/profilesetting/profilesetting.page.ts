import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, MenuController } from '@ionic/angular';
import { ApiService } from '../../api.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { PostProvider } from '../../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profilesetting',
  templateUrl: './profilesetting.page.html',
  styleUrls: ['./profilesetting.page.scss'],
})
export class ProfilesettingPage implements OnInit {

  user_id:any;
  user_mail:any;
  user_phone: any;
  profile_desc: any;
  password: any;
  confirm_password:any;
  fullname: any;
  user_tc: any;
  user_birth: any;
  username: any;

  constructor(
    public _apiservice: ApiService,
    public alertController: AlertController,
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    private storage: Storage,
    private http: HttpClient,
    private route: ActivatedRoute,
    public menuCtrl: MenuController
  ) {
    this.route.params.subscribe((param:any) => {
      this.user_id = param.user_id;
      console.log(this.user_id);
      this.getUser(this.user_id);
    })

  }

  isReadonly() {return true;}

  getUser(user_id){
    this._apiservice.getUser(user_id).subscribe((res:any) => {
      console.log("SUCCESSGET", res);
      let user = res[0];
            this.user_id = user.user_id;
            this.profile_desc = user.profile_desc;
            this.user_phone = user.user_phone;
            this.user_mail = user.user_mail;
            this.user_tc = user.user_tc;
            this.user_birth = user.user_birth;
            this.fullname = user.fullname;
            this.username = user.username;
            this.password = user.password;
    },(err:any) => {
      console.log("ERROR", err)
    })
  }

  updateUser(){

    let data = {

      profile_desc: this.profile_desc,
      user_phone: this.user_phone,
      user_mail: this.user_mail,
      password: this.password,
      fullname: this.fullname,
      user_birth: this.user_birth,
      user_tc: this.user_tc,
    }


    this._apiservice.profileUpdate(this.user_id,data).subscribe((res:any) => {
      console.log("SUCCESS", res);

    },(err:any) => {
      console.log("ERROR", err)
    })


    // this.router.navigateByUrl('tabs/profile')
    // .then(() => {
    //   window.location.reload();
    // });



  }

  ngOnInit() {
  }

  async Logout() {
    this.menuCtrl.close();
    this.storage.clear();
    this.router.navigateByUrl('/login')
    .then(() => {
      window.location.reload();
    });

    const toast = await this.toastCtrl.create({
      message: 'Logout Successful',
      duration: 2000
    });
    toast.present();
  }


}

