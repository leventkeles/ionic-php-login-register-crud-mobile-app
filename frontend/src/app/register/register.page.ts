import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { timeoutWith } from 'rxjs-compat/operator/timeoutWith';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  minDate : string =  ""


  username: string = "";
  user_mail: string ="";
  firstname: string = "";
  lastname: string = "";
  user_phone: string = "";
  user_birth: string = "";
  user_tc: string = "";

  password: string = "";
  confirm_password: string = "";


  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
    var date = new Date();
    date.setFullYear(date.getFullYear()-18);
    this.minDate = date.toISOString();
  }

  formLogin() {
    this.router.navigate(['/login']);
  }

  async prosesRegister() {

    if(this.username == ""){
      const toast = await this.toastCtrl.create({
        message: 'Lütfen kullanıcı adınızı giriniz.',
        duration: 2000
      });
      toast.present();
    }
    else if(this.password == ""){
      const toast = await this.toastCtrl.create({
        message: 'Lütfen şifrenizi giriniz.',
        duration: 2000
      });
      toast.present();
    }
    else if(this.password != this.confirm_password){
      const toast = await this.toastCtrl.create({
        message: 'Geçersiz Parola!',
        duration: 2000
      });
      toast.present();
    }
    else{
      let body = {
        username: this.username,
        fullname: this.firstname+" "+this.lastname,
        user_mail: this.user_mail,
        user_birth: this.user_birth,
        user_phone: this.user_phone,
        user_tc: this.user_tc,
        password: this.password,
        aksi: 'register'
      };
      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {
        var alertmsg = data.msg;
        if(data.success) {
          this.router.navigate(['/login']);
          const toast = await this.toastCtrl.create({
            message: 'Kayıt başarılı!',
            duration: 2000
          });
          toast.present();
        }
        else {
          const toast = await this.toastCtrl.create({
            message: alertmsg,
            duration: 2000
          });
          toast.present();
        }
      });
    }
  }

}
